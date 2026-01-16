# Quick Reference Guide

## 🚀 Quick Start

### Local Development
```bash
# Copy environment file
cp .env.example .env

# Start with Docker Compose
docker-compose up -d

# View application
# http://localhost:3000

# View logs
docker-compose logs -f nextjs

# Stop services
docker-compose down
```

---

## 📋 Workflow Checklists

### Before First Workflow Run
- [ ] Create `integration` branch: `git checkout -b integration && git push -u origin integration`
- [ ] Create `dev` branch: `git checkout -b dev && git push -u origin dev`
- [ ] Add `SONAR_TOKEN` secret to GitHub
- [ ] Verify GitHub token available (auto-provided)

### Before Deployment Workflow
- [ ] Create Docker Hub account
- [ ] Generate Docker Hub access token
- [ ] Add `DOCKERHUB_USERNAME` secret
- [ ] Add `DOCKERHUB_TOKEN` secret
- [ ] Create public Docker Hub repository

---

## 🔐 GitHub Secrets

```
GITHUB_TOKEN          = Auto-provided by GitHub Actions
SONAR_TOKEN          = From SonarCloud
DOCKERHUB_USERNAME   = Your Docker Hub username
DOCKERHUB_TOKEN      = From Docker Hub settings
```

**Add secrets**: Settings → Secrets and variables → Actions → New repository secret

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `Dockerfile.nextjs` | Multi-stage production Docker image |
| `docker-compose.yml` | Docker Compose configuration |
| `.github/workflows/feat-branch-workflow.yml` | Workflow 1: Lint + SonarQube + PR |
| `.github/workflows/dev-deployment-workflow.yml` | Workflow 2: Build + Scan + Push |
| `sonar-project.properties` | SonarQube configuration |
| `.env.example` | Environment variables template |

---

## 🔄 Git Workflow

```bash
# 1. Create feature branch
git checkout -b feat/my-feature

# 2. Make changes and push
git add .
git commit -m "feat: description"
git push origin feat/my-feature

# 3. Workflow 1 runs automatically
#    - Lints changed files
#    - Runs SonarQube
#    - Creates PR to integration

# 4. Review and merge PR to integration

# 5. Create PR from integration → dev

# 6. Merge PR to dev
#    - Workflow 2 runs automatically
#    - Builds Docker image
#    - Scans vulnerabilities
#    - Pushes to Docker Hub
```

---

## 🐳 Docker Commands

```bash
# Build image locally
docker-compose build

# Start services
docker-compose up -d

# View running containers
docker-compose ps

# View logs
docker-compose logs -f nextjs

# Stop services
docker-compose down

# Remove everything
docker-compose down -v
```

---

## 🌐 Access Points

| Service | URL | Command |
|---------|-----|---------|
| Application | http://localhost:3000 | `docker-compose logs nextjs` |
| GitHub Actions | https://github.com/najmulhasan/Electrical-Work-Singapore/actions | Check workflow status |
| Docker Hub Profile | https://hub.docker.com/u/nazmulhasan91 | Your profile |
| Docker Hub Repo | https://hub.docker.com/r/nazmulhasan91/electrical-works-sg | View images |
| SonarCloud | https://sonarcloud.io/project/overview?id=najmulhasan_Electrical-Work-Singapore | View code quality |

---

## ✅ Verification Steps

### Docker Compose Working
```bash
docker-compose ps
# Should show: electrical-works-sg Up 2 minutes

curl http://localhost:3000
# Should return: 200 OK
```

### Workflow 1 Working
```
1. Create branch: feat/test
2. Push to GitHub
3. Check Actions tab
4. Verify: Lint passed, SonarQube scan, PR created
```

### Workflow 2 Working
```
1. Merge PR to integration
2. Create PR to dev
3. Merge PR to dev
4. Check Actions tab
5. Verify: Build passed, Trivy scan, Image pushed
```

### Docker Image on Docker Hub
```bash
docker pull USERNAME/electrical-works-sg:latest
docker run -p 3000:3000 USERNAME/electrical-works-sg:latest
# Access: http://localhost:3000
```

---

## 🐛 Troubleshooting

### Container won't start
```bash
# Clear and rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d

# Check logs
docker-compose logs -f nextjs
```

### Workflow fails to trigger
- Check branch name matches exactly (case-sensitive)
- Verify .github/workflows files exist in repo
- Ensure files are committed to GitHub

### Docker Hub push fails
- Verify DOCKERHUB_TOKEN has Read/Write permissions
- Check Docker Hub token hasn't expired
- Ensure public repository created

### SonarQube scan fails
- Verify SONAR_TOKEN is valid
- Check project key in workflow matches SonarCloud
- Ensure SonarCloud organization is correct

---

## 📞 Support Resources

- **Docker Docs**: https://docs.docker.com
- **GitHub Actions**: https://docs.github.com/en/actions
- **Docker Hub**: https://docs.docker.com/docker-hub/
- **SonarCloud**: https://docs.sonarcloud.io/
- **Trivy**: https://github.com/aquasecurity/trivy

---

## 📊 Expected Workflow Timeline

| Step | Duration | Status |
|------|----------|--------|
| Feature branch push | ~1 min | Triggered automatically |
| Lint test | ~30 sec | Passes on clean code |
| SonarQube scan | ~1-2 min | Completes analysis |
| PR creation | ~1 min | Automatic |
| Merge to integration | Manual | ~5 min |
| PR to dev | Manual | ~5 min |
| Docker image build | ~2-3 min | Building layers |
| Trivy scan | ~1 min | Security scan |
| Docker Hub push | ~2 min | Upload image |
| **Total** | **~15 min** | End-to-end |

---

## 🎯 Success Indicators

✅ All checks should show:
- Lint: ✓ PASSED
- SonarQube: ✓ PASSED  
- PR Created: ✓ SUCCESS
- Docker Build: ✓ SUCCESS
- Trivy Scan: ✓ PASSED
- Docker Push: ✓ SUCCESS
- Image on Docker Hub: ✓ VISIBLE

---

**Last Updated**: January 16, 2026  
**Version**: 1.0.0
