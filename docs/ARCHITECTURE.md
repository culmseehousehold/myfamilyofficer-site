# System Architecture

## 1. High-Level Design

The **FamilyOfficer Marketing Site** is designed as a **Serverless, Event-Driven Web Application**. It decouples the frontend (static content) from the backend (lead capture) to maximize performance, security, and scalability while minimizing cost.

### System Diagram

```mermaid
graph TD
    User([User Browser])
    
    subgraph "Frontend Layer (Global CDN)"
        Route53[Route53 DNS]
        CF[CloudFront CDN]
        S3[S3 Bucket\n(Unversioned)]
    end
    
    subgraph "Backend Layer (Serverless)"
        Lambda[AWS Lambda\n(Python 3.9)]
        Dynamo[DynamoDB Table\n(FamilyOfficerLeads)]
    end
    
    subgraph "CI/CD Pipeline"
        GH[GitHub Actions]
    end

    User -->|HTTPS Request| Route53
    Route53 --> CF
    CF -->|Cache Hit| User
    CF -->|Cache Miss| S3
    
    User -->|POST /api/submit| Lambda
    Lambda -->|PutItem| Dynamo
    
    GH -->|Sync HTML/CSS| S3
    GH -->|Deploy Code| Lambda
```

## 2. Core Components

### Frontend: Static Site Generation (SSG)
*   **Technology**: Next.js 16 (App Router) using `output: 'export'`.
*   **Rationale**: The site is informational and changes infrequently. Pre-rendering HTML at build time eliminates the need for a running Node.js server, reducing attack surface and ensuring sub-second load times.
*   **Hosting**: AWS S3 (Simple Storage Service) configured for Static Website Hosting.
*   **Distribution**: AWS CloudFront handles SSL/TLS termination, edge caching, and global content delivery.

### Backend: Lead Capture Microservice
*   **Technology**: AWS Lambda (Python 3.9).
*   **Rationale**: Form submissions are sporadic. A serverless function scales to zero when not in use (costing $0) but can handle sudden traffic spikes without configuration.
*   **Database**: Amazon DynamoDB (NoSQL).
    *   **Table Name**: `FamilyOfficerLeads`
    *   **Partition Key**: `email` (String)
    *   **Sort Key**: `timestamp` (String)
*   **Security**: The Lambda function has a dedicated IAM Role with "Least Privilege" access—it can *only* write to this specific DynamoDB table.

### Infrastructure as Code (IaC)
*   **Technology**: Terraform.
*   **Scope**: Manages all AWS resources including IAM roles, S3 buckets, CloudFront distributions, and database tables.
*   **State Management**: Local state (`terraform.tfstate`). *Note: In a team environment, this should be migrated to a remote S3 backend.*

## 3. Key Design Decisions

### Why not Vercel?
While Vercel is the default for Next.js, hosting directly on AWS ensures **Data Sovereignty control** (keeping data within specific regions if required later) and unified billing/IAM management within the existing corporate AWS account.

### Why DynamoDB over SQL?
The lead capture data schema is simple and unstructured. DynamoDB offers single-digit millisecond latency and requires no distinct connection management or VPC networking overhead, simplifying the Lambda logic.

### DNS & Content Delivery
*   **DNS Provider**: External (e.g., Namecheap/GoDaddy) managing the domain registration.
*   **Validation**: Uses DNS CNAME validation for AWS ACM (Certificate Manager) to issue free, auto-renewing SSL certificates.
