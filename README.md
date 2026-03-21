# Australian Investment Manager (FamilyOfficer)

## The Operating System for Australian Wealth

A sophisticated marketing site for **FamilyOfficer**—consolidating wealth ecosystems into a single source of truth.

- **Live Site**: [https://www.myfamilyofficer.com](https://www.myfamilyofficer.com)
- **Status**: deployed via GitHub Actions

---

## 📚 Documentation
- **[Architecture Guide](docs/ARCHITECTURE.md)**: System design, diagrams, and component breakdown.
- **[Deployment Runbook](docs/DEPLOYMENT.md)**: Setup, certificates, CloudFront troubleshooting.
- **[Operational Guide](docs/RUNBOOK.md)**: Day-to-day management, monitoring, and disaster recovery.

---

## Quick Start (Local Dev)

### Prerequisites
- Node.js 20+
- Terraform (for infrastructure changes)
- AWS CLI (configured)

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment Strategy
We use a **Continuous Delivery** model triggered by Git Tags.

1.  **Develop**: Features built on branches. `npm run dev` locally.
2.  **Review**: PRs merged to `main`.
3.  **Release**: A semantic version tag (e.g., `v1.0.1`) triggers a production deployment.

### Manual Infrastructure Updates
Infrastructure changes (Lambda, DynamoDB, S3) are managed via **Terraform**:

```bash
cd infra
terraform apply
```

The GitHub Action manages the **application code** (Next.js/HTML/CSS) deployment to the bucket.

## Key Technologies
- **Frontend**: Next.js 16 (App Router), Tailwind CSS v4, Lucide React.
- **Backend**: AWS Lambda (Python 3.9) & DynamoDB.
- **Infrastructure**: Terraform (`/infra`), Route53, ACM.
- **CI/CD**: GitHub Actions.
