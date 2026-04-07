#!/bin/bash

# Rootinize Website Deployment Script for Hostinger VPS with Traefik
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Rootinize website deployment with Traefik..."

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

# Check if Traefik network exists
if ! docker network ls | grep -q traefik; then
    echo "⚠️  Traefik network not found. Creating traefik network..."
    docker network create traefik
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

echo "🚀 Starting Docker container with Traefik..."
docker-compose up -d

echo "✅ Deployment complete!"
echo ""
echo "📊 Deployment Information:"
echo "   Website URL: https://rootinize.team"
echo "   Container: rootinize-website"
echo "   Traefik Network: traefik"
echo "   Docker Compose: docker-compose.yml"
echo ""
echo "🔧 Management Commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop service: docker-compose down"
echo "   Restart service: docker-compose restart"
echo "   Update and redeploy: ./deploy.sh"
echo ""
echo "🌐 Traefik Configuration:"
echo "   - Automatic SSL with Let's Encrypt"
echo "   - Reverse proxy routing"
echo "   - Host: rootinize.team and www.rootinize.team"
echo ""
echo "🔍 Verify Traefik routing:"
echo "   docker logs traefik 2>/dev/null | grep rootinize || echo 'Check Traefik container logs'"