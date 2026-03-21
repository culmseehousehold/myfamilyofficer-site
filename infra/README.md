# Deployment Instructions

## 1. Prerequisites & Rationale

### Terraform Installation
We use Terraform to manage our AWS infrastructure as code.
- **On Linux (Snap):**
  ```bash
  sudo snap install terraform --classic
  ```
  **Why `--classic`?** Standard snap packages are sandboxed and cannot access your home directory (where your code lives) or hidden system files (like `~/.aws/credentials`). The `--classic` flag grants the necessary permissions for Terraform to function as a developer tool.

- **On macOS:** `brew install terraform`

### Architecture Rationale
We chose a **Static + Serverless** architecture over a traditional server (EC2/ECS) for the following reasons:
1.  **Cost:** S3/CloudFront hosting costs pennies. Lambda has a generous free tier (1M requests/mo).
2.  **Security:** No servers to patch. The marketing site is read-only HTML.
3.  **Separation of Concerns:** The marketing site (`www`) is completely decoupled from the main app (`app`).
4.  **Australian Data Sovereignty:** The infrastructure is deployed to `ap-southeast-2` (Sydney) to ensure all data remains within Australian jurisdiction, a key requirement for Family Offices.

## 2. Deploy Infrastructure
Navigate to the `infra` directory and run:

```bash
cd infra
terraform init
terraform apply
```

Type `yes` when prompted.
It will output two values:
1.  `function_url`: Copy this URL.
2.  `website_endpoint`: This is your temporary website URL.

## 3. Configure Frontend (Local Development)
1.  Rename `.env.local.example` to `.env.local`.
2.  Paste the `function_url` as the value for `NEXT_PUBLIC_API_URL`.

## 4. Setup GitHub Deployment
To enable secure, automated deployments via GitHub Actions:

### 1. Create Dedicated IAM User (Best Practice)
Instead of using your root/admin keys, create a limited-privilege user for GitHub:
- **User Name**: `github-deploy-user-myfamilyofficersite`
- **Policy Name**: `GitHubDeploy-MyFamilyOfficer-Site`
- **Permissions**: This user only has permission to `s3:PutObject` (write) to the specific `www.myfamilyofficer.com` bucket. It cannot access any other AWS resources.

### 2. Configure GitHub Secrets
1.  Push this code to a GitHub repository.
2.  Go to **Settings > Secrets and variables > Actions**.
3.  Add the following Repository Secrets using the Access Keys generated for the user above:
    *   `AWS_ACCESS_KEY_ID`: The IAM User's Access Key.
    *   `AWS_SECRET_ACCESS_KEY`: The IAM User's Secret Key.
    *   `NEXT_PUBLIC_API_URL`: The `function_url` from step 2 (e.g. `https://...`).

### 3. Deploy via Release
**Create a Release**: When you create a new Release in GitHub (e.g. `v1.1.0`), the workflow will automatically build the Next.js site and sync it to S3 using these secure credentials.
