# Docker Deployment for Rootinize Website

## 🐳 Quick Start

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
├── docker-compose.yml      # Docker Compose configuration
├── deploy.sh              # Automated deployment script
├── app/                   # Next.js application
├── components/            # React components
├── public/               # Static assets (logo, favicon)
└── .env.local            # Environment variables (create this)
```

## 🔧 Manual Docker Commands

### Build and run manually:
```bash
# Clone repository
git clone https://github.com/johncyongco/rootinize-updated.git
cd rootinize-updated

# Build Docker image
docker-compose build

# Start container
docker-compose up -d

# View logs
docker-compose logs -f
```

### Management commands:
```bash
# Stop container
docker-compose down

# Restart container
docker-compose restart

# Update and redeploy
git pull origin master
docker-compose build
docker-compose up -d
```

## 🌐 Nginx Configuration (Optional)

Create `/etc/nginx/sites-available/rootinize`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/rootinize /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 SSL Certificate (HTTPS)
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## 🐛 Troubleshooting

### Check if container is running:
```bash
docker ps
docker-compose ps
```

### View logs:
```bash
docker-compose logs -f
```

### Check container health:
```bash
docker exec -it rootinize-website curl http://localhost:3000
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
docker stats
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

## 📞 Support
- Contact: contact@rootinize.team
- GitHub: https://github.com/johncyongco/rootinize-updated
- Docker Hub: (Optional) Push to Docker Hub for easier deployment

---
**Last Updated:** April 8, 2026
**Docker Version:** 20.10+
**Next.js Version:** 14.2.5
**Status:** Production Ready