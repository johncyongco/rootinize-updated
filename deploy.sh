#!/bin/bash

# Rootinize Website Deployment Script for Hostinger VPS
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Rootinize website deployment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Installing Docker..."
    # Install Docker
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Installing Docker Compose..."
    # Install Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Create directory structure
echo "📁 Creating directory structure..."
sudo mkdir -p /var/www/rootinize
cd /var/www/rootinize

# Clone or update repository
if [ -d ".git" ]; then
    echo "🔄 Updating existing repository..."
    git pull origin master
else
    echo "📥 Cloning repository..."
    git clone https://github.com/johncyongco/rootinize-updated.git .
fi

# Build and start Docker containers
echo "🐳 Building Docker image..."
docker-compose build

echo "🚀 Starting Docker containers..."
docker-compose up -d

echo "✅ Deployment complete!"
echo ""
echo "📊 Deployment Information:"
echo "   Website URL: http://localhost:3000"
echo "   Container: rootinize-website"
echo "   Docker Compose: docker-compose.yml"
echo ""
echo "🔧 Management Commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop service: docker-compose down"
echo "   Restart service: docker-compose restart"
echo "   Update and redeploy: ./deploy.sh"
echo ""
echo "🌐 To make it publicly accessible, configure Nginx:"
echo "   sudo nano /etc/nginx/sites-available/rootinize"
echo ""
echo "📝 Nginx configuration example:"
cat << 'EOF'
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
EOF

echo ""
echo "🔒 For SSL (HTTPS):"
echo "   sudo certbot --nginx -d your-domain.com -d www.your-domain.com"