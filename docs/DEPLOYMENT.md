# Deployment & Infrastructure Runbook

## Overview
This project uses **Next.js 16 (Static Export)** deployed to **AWS S3** and distributed globally via **CloudFront**. Lead capture is handled by a **Serverless Python Lambda** function writing to **DynamoDB**. Infrastructure is managed via **Terraform**.

## Architecture
- **Frontend**: AWS S3 (Static Website Hosting) + CloudFront (CDN/HTTPS)
- **Backend**: AWS Lambda (`FamilyOfficerLeadCapture`) + DynamoDB (`FamilyOfficerLeads`)
- **DNS/SSL**: Route53 (DNS) + ACM (Certificates in `us-east-1` for CloudFront)
- **CI/CD**: GitHub Actions

## Prerequisites
- **AWS Account**: Must be verified for CloudFront usage (contact AWS Support if you see 403 Access Denied on distribution creation).
- **Terraform**: v1.5+ installed locally.
- **AWS CLI**: Configured with `AdministratorAccess` or sufficient permissions.
- **Node.js**: v20+ for local development.

## Infrastructure Setup (First Time)
The infrastructure code is located in `infra/`.

1.  **Initialize Terraform**:
    ```bash
    cd infra
    terraform init
    ```

2.  **Plan & Apply**:
    Review the changes before applying.
    ```bash
    terraform plan
    terraform apply
    ```

3.  **DNS Validation (Important)**:
    AWS ACM requires DNS validation before issuing the SSL certificate.
    - Run `terraform output` to see the required CNAME records.
    - Add these CNAME records to your DNS provider (Namecheap, GoDaddy, Route53, etc.).
    - **Wait** for validation (check status in AWS Console > ACM).
    - **Note**: The ACM certificate *must* be in `us-east-1` (N. Virginia) to work with CloudFront, even if your other resources are in Sydney (`ap-southeast-2`).

4.  **Activate CloudFront**:
    Once the certificate is VALIDATED, uncomment the `aws_cloudfront_distribution` resource in `infra/cloudfront.tf` and run `terraform apply` again.

## Deployment Workflow (CI/CD)
We use GitHub Actions for automated deployments.

### Routine Updates
1.  **Push Changes**: Commit and push changes to the `main` branch.
2.  **Create Release**: Create a new GitHub Release (e.g., `v1.0.3`).
    ```bash
    # Via CLI
    gh release create v1.0.3 --generate-notes
    
    # Or via GitHub UI > Releases > Draft a new release
    ```
3.  **Monitor Deployment**:
    - Go to **Actions** tab in GitHub.
    - Watch the **Deploy Production** workflow.
    - It will:
        - Build the Next.js app (`npm run build`).
        - Sync the `out/` directory to the S3 bucket.
        - Invalidate the CloudFront cache (if configured).

## Troubleshooting

### CloudFront 403 Access Denied
**Error**: `AccessDenied: Your account must be verified before you can add new CloudFront resources.`
**Fix**: This is an AWS anti-abuse measure for new accounts.
1.  Log in to AWS Console.
2.  Go to **Support Center** > **Create Case**.
3.  Category: **Account & Billing** > **Account Activation**.
4.  Subject: "Verify Account for CloudFront".
5.  Wait for AWS Support confirmation.

### Certificate Stuck in "Pending Validation"
1.  Check `terraform output` for the exact CNAME built by Terraform.
2.  Verify your DNS records using `dig`:
    ```bash
    dig _[token].wwwbeta.myfamilyofficer.com CNAME
    ```
3.  Ensure you have **removed** any CNAME records for the root domain if Terraform is not managing the root (AWS ACM won't validate `*.domain.com` without a root validation record).

### Site Not Updating
1.  **Browser Cache**: CloudFront caches content by default. Hard refresh (`Ctrl+F5`) or wait.
2.  **S3 Sync**: Check GitHub Actions logs to ensure `aws s3 sync` command succeeded.
3.  **CloudFront Invalidation**: Ensure the deployment script creates an invalidation for `/*`.

## Disaster Recovery / Rollback

### Rollback Code
1.  Revert the commit in git.
2.  Push to `main`.
3.  Create a new release (e.g., `v1.0.4-rollback`).

### Rollback Infrastructure
If a Terraform change breaks something:
1.  Check out the previous version of `.tf` files.
2.  Run `terraform apply` to restore the previous state.
