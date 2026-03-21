# Copilot Instructions

## Project Overview
This project is a sophisticated marketing website for "FamilyOfficer", built with Next.js 16 (Static Site Generation), Tailwind CSS v4, and deployed to AWS (S3 hosting + Lambda API).

## Completed Tasks
- [x] Clarify Project Requirements (High-end marketing site, static + serverless)
- [x] Scaffold the Project (Next.js 16, Tailwind v4)
- [x] Customize the Project (Marketing content, Lead Capture form, DynamoDB, Lambda)
- [x] Install Required Extensions (Skipped - None required beyond standard VS Code setup)
- [x] Compile the Project (Built successfully via `npm run build`)
- [x] Create and Run Task (Deployment handled via GitHub Actions)
- [x] Launch the Project (Infrastructure deployed via Terraform, CI/CD pipeline configured)
- [x] Ensure Documentation is Complete (README updated with architecture & deployment details)

## Architecture
- **Frontend**: Next.js App Router (Static Export)
- **Backend API**: AWS Lambda (Python/Boto3)
- **Database**: DynamoDB (Lead storage)
- **Hosting**: AWS S3 Static Website Hosting
- **IaC**: Terraform
- **CI/CD**: GitHub Actions (Release-triggered)

## Ongoing Instructions
- When editing the frontend, ensure design consistency with the "sophisticated/high-end" aesthetic.
- When modifying infrastructure, update Terraform configurations in `/infra`.
- When updating dependencies, ensure compatibility with Next.js 16 and Node.js 20.
