# Australian Investment Manager (FamilyOfficer)

## The Operating System for Australian Wealth

A sophisticated marketing site for FamilyOfficer—consolidating wealth ecosystems into a single source of truth.

### Live Site
[https://www.myfamilyofficer.com](https://www.myfamilyofficer.com)

### Architecture
This project is a **Next.js 16 Static Site** deployed to **AWS S3**, with a **Serverless Lambda** backend for lead capture.

- **Frontend**: Next.js (App Router), Tailwind CSS v4, Lucide React.
- **Backend**: AWS Lambda (Python/Boto3) & DynamoDB.
- **Infrastructure**: Terraform (`/infra` directory).
- **CI/CD**: GitHub Actions (deploys on Release).

### Features
- **Sophisticated Design**: Tailored for high-net-worth individuals.
- **Lead Capture**: Serverless form submission storing data in DynamoDB.
- **Performance**: Static site generation (SSG) for ultra-fast loading.

## Development

### Prerequisites
- Node.js 20+
- Terraform (for infrastructure)
- AWS CLI (configured)

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment
Deployment is automated via GitHub Actions.

1.  **Push to `main`**: Commits are built and tested.
2.  **Create a Release**: Tagging a release (e.g., `v1.0.0`) triggers the deployment to production.

#### Manual Deployment (Infrastructure)
To modify underlying AWS resources (Lambda, DynamoDB, S3 bucket):

```bash
cd infra
terraform apply
```

#### Secrets
The GitHub Action requires the following secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `NEXT_PUBLIC_API_URL` (Output from `terraform output function_url`)

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Terraform Documentation](https://www.terraform.io/)
