# Operational Runbook: AWS Deployment & Management

**Version**: 1.0.0
**Purpose**: This document outlines standard operating procedures for deploying, monitoring, and troubleshooting the platform.

## 1. Quick Start

### For Developers on Day 1
**Prerequisites**:
1.  **Clone Repo**: `git clone https://github.com/culmseehousehold/myfamilyofficer-site`
2.  **Install Node**: `nvm use 20`
3.  **Install Global Tools**: `brew install terraform`

### Required IAM Access
Your AWS User (`paulculmsee` assumed) needs:
- `AmazonS3FullAccess`
- `CloudFrontFullAccess`
- `AmazonDynamoDBFullAccess`
- `AWSLambda_FullAccess`
- `IAMFullAccess` (for creating Lambda Roles)

## 2. Infrastructure Management (Terraform)
All infrastructure changes are made via Terraform in the `infra/` directory.

### Typical Workflow: Add a new AWS resource
1.  **Edit**: Modify `infra/main.tf` or `infra/lambda/index.py`.
2.  **Format**: `terraform fmt` (Standardizes HCL syntax).
3.  **Plan**: Check what will happen.
    ```bash
    cd infra
    terraform plan -out tfplan
    ```
4.  **Confirm**: Inspect the output carefully. Look for "red" lines (destructions).
    *   *Warning*: Never delete the `FamilyOfficerLeads` table unless intentional (data loss).
5.  **Apply**: Execute the change.
    ```bash
    terraform apply "tfplan"
    ```

### DNS & SSL Certificates (Critical)
When adding a new subnet or domain alias to CloudFront:
1.  Update `infra/cloudfront.tf`.
2.  Run `terraform apply`.
3.  Run `terraform output`.
4.  Copy the new CNAME records to your DNS registrar immediately.
    *   **Validation Check**: Use `dig _[record].domain.com CNAME` to verify propagation.
    *   **Failure Mode**: AWS ACM will time out after 72 hours if DNS records are missing.

## 3. Application Deployment (CI/CD)
Deployments are fully automated via GitHub Actions.

### Release Process
1.  **Feature Branch**: Develop locally (`npm run dev`). Feature branches deploy to *nothing* (CI build check only).
2.  **Merge to Main**: Merges to `main` trigger a staging build but no deployment.
3.  **Production Release**: Deployment happens **only** when a Release Tag is created.

**Command Line Release**:
```bash
# 1. Ensure you are on main and up to date
git checkout main && git pull

# 2. Tag the release (Semantic Versioning)
git tag v1.0.3

# 3. Push the tag (Triggers GitHub Action)
git push origin v1.0.3
```

### Verification Steps
After the GitHub Action completes:
1.  **Check Site**: Visit `https://www.myfamilyofficer.com` (Hard refresh: Cmd+Shift+R).
2.  **Check Headers**: Inspect network tab for `x-cache: Miss from cloudfront` (first load) or `Hit from cloudfront`.
3.  **Submit Lead**: Fill out the form. Check Network Tab for `200 OK` response from Lambda.

## 4. Operational Monitoring

### Accessing Logs
*   **Lambda Logs**: CloudWatch > Log groups > `/aws/lambda/FamilyOfficerLeadCapture`
    *   *Look for*: `ERROR` or `TIMEOUT`.
*   **Frontend Errors**: Browser Console (Client-side only) or CloudFront Access Logs (S3 bucket if enabled).

### Database Access
*   **View Leads**:
    ```bash
    aws dynamodb scan --table-name FamilyOfficerLeads --region ap-southeast-2
    ```
*   **Export Data**: Use the AWS Console "Export to CSV" feature or write a simple Python script using `boto3`.

## 5. Troubleshooting Guide

### Issue: "Access Denied" on CloudFront Creation
*   **Symptom**: Terraform fails with 403.
*   **Cause**: New AWS accounts are sandboxed.
*   **Resolution**: Contact AWS Support (Account & Billing > Activation) to request CloudFront access.

### Issue: Form Submit Fails (500 Error)
*   **Cause**: Lambda permissions or code error.
*   **Debug**:
    1.  Check CloudWatch Logs for the specific traceback.
    2.  Verify IAM Role has `dynamodb:PutItem` permission.
    3.  Check if `TABLE_NAME` environment variable is set correctly in Lambda configuration.

### Issue: Old Content on Live Site
*   **Cause**: CloudFront caching.
*   **Resolution**: The deployment script invalidates the cache automatically. If it fails:
    ```bash
    aws cloudfront create-invalidation --distribution-id [DIST_ID] --paths "/*"
    ```

## 6. Disaster Recovery

### Accidental Deletion of Infrastructure
1.  **Do NOT panic**. Terraform State knows what *should* exist.
2.  Run `terraform apply`. It will recreate missing resources (Lambda, S3, etc.).
3.  **Data Loss Risk**: If DynamoDB was deleted, data is gone unless Point-in-Time Recovery (PITR) was enabled. (Currently: Disabled).
    *   *Recommendation*: Enable PITR in `infra/main.tf` for production data safety.

### Bad Deployment (Code Broken)
1.  Revert the commit in Git: `git revert [bad_hash]`.
2.  Tag a new integer release: `git tag v1.0.4`.
3.  Push to deploy the fix.
