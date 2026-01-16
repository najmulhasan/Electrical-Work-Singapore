# GitHub Actions Secrets Configuration Guide

## Required Secrets for Workflows

### For Workflow 1: Feature Branch Workflow
These secrets should already be available by default in GitHub Actions:
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions (no manual setup needed)

### For Workflow 1: SonarQube Integration
**Secret Name**: `SONAR_TOKEN`
**Where to Get**: 
1. Visit https://sonarcloud.io/account/security
2. Generate new token
3. Copy the token value

### For Workflow 2: Docker Hub Push
**Secret Names**:
1. `DOCKERHUB_USERNAME` - Your Docker Hub username
2. `DOCKERHUB_TOKEN` - Docker Hub access token (not password)

**Where to Get Docker Hub Token**:
1. Go to https://hub.docker.com/settings/security
2. Click "New Access Token"
3. Give it a name (e.g., "GitHub Actions")
4. Select "Read, Write" permissions
5. Click "Generate"
6. Copy the token

## How to Add Secrets to GitHub

### Method 1: GitHub Web Interface
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Enter:
   - **Name**: (e.g., `SONAR_TOKEN`)
   - **Secret**: (paste the value)
6. Click **Add secret**

### Method 2: GitHub CLI
```bash
# Install GitHub CLI from https://cli.github.com/

# Login to GitHub
gh auth login

# Add a secret
gh secret set SONAR_TOKEN --body "YOUR_SONAR_TOKEN"
gh secret set DOCKERHUB_USERNAME --body "YOUR_DOCKER_HUB_USERNAME"
gh secret set DOCKERHUB_TOKEN --body "YOUR_DOCKER_HUB_TOKEN"

# List all secrets
gh secret list

# Delete a secret
gh secret delete SONAR_TOKEN
```

## Verification Checklist

Before running workflows, verify all secrets are set:

```bash
# Using GitHub CLI (installed and authenticated)
gh secret list
```

Expected output:
```
SONAR_TOKEN              (set)
DOCKERHUB_USERNAME      (set)
DOCKERHUB_TOKEN         (set)
```

## Security Best Practices

⚠️ **Important**: 
- Never commit secrets to GitHub
- Use access tokens, not passwords
- Rotate tokens regularly
- Use minimal required permissions
- GitHub secrets are encrypted and hidden in workflow logs

## Workflow Secrets Usage

In workflows, reference secrets using:
```yaml
${{ secrets.SECRET_NAME }}
```

Example from our workflows:
```yaml
- name: Login to Docker Hub
  uses: docker/login-action@v2
  with:
    username: ${{ secrets.DOCKERHUB_USERNAME }}
    password: ${{ secrets.DOCKERHUB_TOKEN }}
```

The values are never exposed in logs.

## Troubleshooting

### Secret not found error
- Verify secret name matches exactly (case-sensitive)
- Ensure secret is set in the correct repository
- Check that workflow file references correct secret name

### Token expired or invalid
- Regenerate the token from the service (SonarCloud, Docker Hub)
- Update the secret in GitHub
- Re-run the workflow

### Access denied in workflow
- Verify token has required permissions
- For Docker Hub: ensure token has "Read, Write" access
- For SonarCloud: ensure token has proper org access
