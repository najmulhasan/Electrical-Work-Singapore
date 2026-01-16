# Docker & GitHub Actions Setup Guide

## Project: Electrical Works Singapore

This guide provides step-by-step instructions for setting up Docker, Docker Compose, and GitHub Actions workflows for the Electrical Works Singapore project.

---

## Table of Contents
1. [Local Docker Setup](#local-docker-setup)
2. [GitHub Actions Workflows](#github-actions-workflows)
3. [Docker Hub Integration](#docker-hub-integration)
4. [Deployment Process](#deployment-process)
5. [Screenshots & Verification](#screenshots--verification)

---

## Local Docker Setup

### Prerequisites
- Docker Desktop installed (Windows, Mac, or Linux)
- Docker Compose installed
- Node.js 18+ (for local development)
- Git installed

### Step 1: Build and Run with Docker Compose

```bash
# Clone the repository
git clone https://github.com/najmulhasan/Electrical-Work-Singapore.git
cd Electrical-Work-Singapore

# Create .env file
cp .env.example .env

# Build the Docker image
docker-compose build

# Start the application
docker-compose up -d

# View logs
docker-compose logs -f nextjs
```

### Step 2: Access the Application

- **URL**: http://localhost:3000
- **Container**: electrical-works-sg
- **Status**: Check with `docker-compose ps`

### Step 3: Verify Running Application

```bash
# Check if service is running
docker-compose ps

# View logs
docker-compose logs -f nextjs

# Test the service
curl http://localhost:3000

# Stop the service
docker-compose down
```

---

## GitHub Actions Workflows

### Workflow 1: Feature Branch Workflow (`feat-branch-workflow.yml`)

**Triggers**: Push or PR to `feat/*` branches

**What it does**:
1. ✅ Runs ESLint on changed files only
2. ✅ Runs SonarQube code quality analysis
3. ✅ Automatically creates a PR to the `integration` branch

**Setup Requirements**:

#### Step 1: Generate GitHub Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scopes: `repo`, `workflow`, `write:packages`
4. Copy the token

#### Step 2: Add GitHub Secret
1. Go to repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `GITHUB_TOKEN`
4. Value: Paste your generated token

#### Step 3: Setup SonarQube
1. Go to [SonarCloud](https://sonarcloud.io/)
2. Sign up/Login with GitHub
3. Create organization and project
4. Generate token from account settings
5. Add as GitHub secret:
   - Name: `SONAR_TOKEN`
   - Value: Your SonarCloud token

#### Step 4: Create Integration Branch
```bash
git checkout -b integration
git push -u origin integration
```

#### Step 5: Test the Workflow
```bash
# Create a feature branch
git checkout -b feat/test-feature

# Make changes and commit
git add .
git commit -m "Test feature"

# Push to trigger workflow
git push origin feat/test-feature
```

---

### Workflow 2: Dev Deployment Workflow (`dev-deployment-workflow.yml`)

**Triggers**: PR merged to `dev` from `integration` branch

**What it does**:
1. ✅ Builds Docker image with semantic versioning
2. ✅ Runs Trivy vulnerability scan
3. ✅ Pushes image to Docker Hub

**Setup Requirements**:

#### Step 1: Create Docker Hub Account
1. Go to [Docker Hub](https://hub.docker.com/)
2. Sign up/Login
3. Click profile → Account Settings → Security
4. Generate new Access Token

#### Step 2: Add Docker Hub Secrets to GitHub
1. Go to repository → Settings → Secrets and variables → Actions
2. Add two secrets:
   - Name: `DOCKERHUB_USERNAME`
     Value: Your Docker Hub username
   - Name: `DOCKERHUB_TOKEN`
     Value: Your generated Docker Hub token

#### Step 3: Create Dev and Integration Branches
```bash
# Create integration branch
git checkout -b integration
git push -u origin integration

# Create dev branch
git checkout -b dev
git push -u origin dev
```

#### Step 4: Setup Branch Protection (Optional but Recommended)
1. Go to Settings → Branches → Branch protection rules
2. Add rules for `dev` branch:
   - Require pull request reviews before merging
   - Require status checks to pass
   - Require branches to be up to date

#### Step 5: Test the Workflow
```bash
# Create a feature
git checkout -b feat/new-feature
git add .
git commit -m "New feature"
git push origin feat/new-feature

# This triggers workflow 1, creates PR to integration
# Once PR is merged, trigger workflow 2:
git checkout dev
git pull origin dev
# Workflow 2 runs and pushes to Docker Hub
```

---

## Docker Hub Integration

### Prerequisites
- Docker Hub account created
- Access token generated

### Verify Docker Hub Setup
```bash
# Login to Docker Hub locally
docker login

# Username: nazmulhasan91
# Password: Your access token

# Pull the image
docker pull nazmulhasan91/electrical-works-sg:latest

# Run the image
docker run -p 3000:3000 nazmulhasan91/electrical-works-sg:latest
```

### Image Tags
- `latest` - Latest stable version
- `<commit-sha>` - Specific commit version
- `v1.0.0` - Semantic versioning (can be added manually)

---

## Deployment Process

### Complete Flow

```
1. Developer creates feat/new-feature branch
   ↓
2. Makes changes and pushes to GitHub
   ↓
3. Workflow 1 runs:
   - Lint changed files only
   - Run SonarQube analysis
   - Create PR to integration
   ↓
4. Code review and merge to integration
   ↓
5. Create PR from integration → dev
   ↓
6. After merge to dev, Workflow 2 runs:
   - Build Docker image
   - Run Trivy security scan
   - Push to Docker Hub
   ↓
7. Image available on Docker Hub
   ↓
8. Deploy from Docker Hub to production
```

---

## Screenshots & Verification

### Screenshot 1: Docker Compose Running
```
Command:
docker-compose up -d
docker-compose ps

Expected Output:
NAME                     COMMAND                  SERVICE             STATUS              PORTS
electrical-works-sg      "npm start"              nextjs              Up 2 minutes        0.0.0.0:3000->3000/tcp
```

### Screenshot 2: Application Accessible
```
Command:
curl http://localhost:3000

Expected Output:
HTTP/1.1 200 OK
Server: (Next.js server response)
```

### Screenshot 3: GitHub Actions Workflow 1 Success
- Go to GitHub repository
- Click "Actions" tab
- Select "Feature Branch Workflow"
- Verify all jobs completed successfully

### Screenshot 4: GitHub Actions Workflow 2 Success
- Go to GitHub repository
- Click "Actions" tab
- Select "Dev Deployment Workflow"
- Verify Docker image pushed to Docker Hub

### Screenshot 5: Docker Hub Repository
- Go to [Docker Hub](https://hub.docker.com/)
- Navigate to your repository
- Verify image tags and pull statistics

---

## Troubleshooting

### Docker Compose Issues
```bash
# Clear everything and restart
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d

# Check logs
docker-compose logs -f nextjs

# Rebuild specific service
docker-compose build --no-cache nextjs
```

### Workflow Issues
```bash
# Check workflow syntax
npm install -g ajv-cli
ajv validate -s .github/workflows/feat-branch-workflow.yml

# View workflow logs in GitHub Actions
- Go to Actions → Workflow name → Run details
```

### Docker Hub Push Issues
```bash
# Verify Docker Hub authentication
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Verify image exists locally
docker images | grep electrical-works-sg

# Manual push
docker tag electrical-works-sg:latest <username>/electrical-works-sg:latest
docker push <username>/electrical-works-sg:latest
```

---

## Environment Variables

### .env File Template
```env
# Application
NODE_ENV=production
NEXT_PUBLIC_API_URL=http://localhost:3000

# Optional: Database
# POSTGRES_USER=postgres
# POSTGRES_PASSWORD=secure_password
# POSTGRES_DB=electrical_works

# Optional: Email/Notifications
# SMTP_HOST=your-smtp-host
# SMTP_PORT=587
# SMTP_USER=your-email
# SMTP_PASSWORD=your-password
```

---

## Important Notes

✅ **Before Submission**: 
- [ ] Ensure .github/workflows are committed to GitHub
- [ ] Configure all required secrets in GitHub
- [ ] Test both workflows end-to-end
- [ ] Take screenshots of successful runs
- [ ] Verify Docker image is on Docker Hub

📚 **Documentation Links**:
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Docker Hub Docs](https://docs.docker.com/docker-hub/)
- [SonarCloud Docs](https://docs.sonarcloud.io/)
- [Trivy Docs](https://github.com/aquasecurity/trivy)

---

## Repository Links (Update with Your Details)

- **GitHub Repository**: https://github.com/najmulhasan/Electrical-Work-Singapore
- **Docker Hub Repository**: https://hub.docker.com/r/YOUR_USERNAME/electrical-works-sg
- **SonarCloud Project**: https://sonarcloud.io/organizations/YOUR_ORG/projects
- **GitHub Actions**: https://github.com/najmulhasan/Electrical-Work-Singapore/actions

---

**Assignment Completed By**: [Your Name]
**Date**: January 16, 2026
**Status**: Ready for Submission ✅
