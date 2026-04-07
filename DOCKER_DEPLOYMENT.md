# Docker Deployment for Rootinize Website with Traefik

## 🐳 Quick Start with Traefik

### Prerequisites:
- Docker and Docker Compose installed
- Traefik reverse proxy running on `traefik` network
- DNS records pointing to your server IP

### 1. SSH into your Hostinger VPS
```bash
ssh user@your-vps-ip
```

### 2. Run the deployment script
```bash
# Make the script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## 📁 Project Structure
```
/var/www/rootinize/
├── Dockerfile              # Docker build configuration
├── docker-compose.yml      # Docker Compose with Traefik labels
├── deploy.sh              # Automated deployment script
├── app/                   # Next.js application
├── components/            # React components
├── public/               # Static assets (logo, favicon)
└── .env.local            # Environment variables (create this)
```

## 🔧 Traefik Configuration

### docker-compose.yml key features:
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.rootinize.rule=Host(`rootinize.team`) || Host(`www.rootinize.team`)"
  - "traefik.http.routers.rootinize.entrypoints=websecure"
  - "traefik.http.routers.rootinize.tls.certresolver=myresolver"
  - "traefik.http.services.rootinize.loadbalancer.server.port=3000"
  - "traefik.docker.network=traefik"
```

### Required Traefik setup:
1. Traefik must be running on the `traefik` network
2. Let's Encrypt certificate resolver configured in Traefik
3. DNS records for `rootinize.team` and `www.rootinize.team`

## 🔧 Manual Deployment with Traefik

### 1. Clone repository
```bash
git clone https://github.com/johncyongco/rootinize-updated.git
cd rootinize-updated
```

### 2. Ensure Traefik network exists
```bash
docker network create traefik 2>/dev/null || true
```

### 3. Build and deploy
```bash
docker-compose build
docker-compose up -d
```

## 🚀 Traefik Benefits
- **Automatic SSL**: Let's Encrypt certificates auto-renewal
- **Reverse Proxy**: No need for Nginx configuration
- **Load Balancing**: Built-in load balancing
- **Service Discovery**: Automatic container discovery
- **Dashboard**: Web UI for monitoring (if enabled)

## 🔧 Management Commands

### View container status:
```bash
docker-compose ps
docker ps | grep rootinize
```

### View logs:
```bash
docker-compose logs -f
```

### Restart service:
```bash
docker-compose restart
```

### Update and redeploy:
```bash
git pull origin master
docker-compose build
docker-compose up -d
```

### Stop service:
```bash
docker-compose down
```

## 🐛 Troubleshooting

### Check Traefik routing:
```bash
docker logs traefik 2>/dev/null | grep rootinize
```

### Verify container health:
```bash
docker exec rootinize-website curl -f http://localhost:3000
```

### Check network connectivity:
```bash
docker network inspect traefik
```

### Rebuild from scratch:
```bash
docker-compose down
docker system prune -a
docker-compose build
docker-compose up -d
```

## 📊 Monitoring

### Resource usage:
```bash
docker stats rootinize-website
```

### Container details:
```bash
docker inspect rootinize-website
```

### Access container shell:
```bash
docker exec -it rootinize-website sh
```

## 🔄 Updates

### Update website content:
1. Push changes to GitHub
2. On VPS: `git pull origin master`
3. `docker-compose build`
4. `docker-compose up -d`

### Update environment variables:
1. Edit `.env.local`
2. `docker-compose down`
3. `docker-compose up -d`

## 🌐 Domain Configuration

### DNS Records:
```
A     rootinize.team     → YOUR_VPS_IP
CNAME www.rootinize.team → rootinize.team
```

### Traefik Dashboard (if enabled):
- URL: `https://traefik.your-domain.com`
- Protected with basic auth

## 📞 Support
- Contact: contact@rootinize.team
- GitHub: https://github.com/johncyongco/rootinize-updated
- Traefik Docs: https://doc.traefik.io/traefik/

---
**Last Updated:** April 8, 2026
**Docker Version:** 20.10+
**Traefik Version:** 2.x+
**Next.js Version:** 14.2.5
**Status:** Production Ready with Traefik