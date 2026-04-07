# Rootinize Website - Deployment Checklist

## ✅ Completed Tasks

### 1. Website Features
- [x] Hero section with rotating text and CTA buttons
- [x] Services section (4 cards)
- [x] Process section (4-step workflow)
- [x] Our Work section (Dashboard showcase)
- [x] Why Choose Us section
- [x] Testimonials section
- [x] FAQ section
- [x] Contact form with multi-step validation
- [x] Final CTA section
- [x] Footer with navigation

### 2. Technical Implementation
- [x] Next.js 14 with TypeScript
- [x] Tailwind CSS for styling
- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark theme with brand colors (#3A2A6C, #6F86B6)
- [x] Interactive components (form validation, animations)
- [x] Webhook integration for contact form
- [x] Favicon and browser tab logo
- [x] Build successful with no errors

### 3. Contact Form Features
- [x] Multi-step form (Name → Email → Industry → Message)
- [x] Real-time validation
- [x] Keyboard navigation (Enter to continue/submit)
- [x] Webhook integration to n8n.rootinize.team
- [x] Success/error feedback
- [x] Form reset after submission

### 4. CTA Integration
- [x] All CTA buttons link to: https://cal.com/rootinize/30min
- [x] Opens in new tab with proper security attributes
- [x] Buttons in: Hero, Navbar, Final CTA, FAQ

## 🔧 Deployment Preparation

### Files to Commit to GitHub
```
.gitignore
app/
components/
lib/
public/
.next (build output - add to .gitignore)
node_modules/ (add to .gitignore)
package.json
package-lock.json
tsconfig.json
next.config.js
tailwind.config.ts
postcss.config.mjs
.env.local (add to .gitignore)
components.json
DEPLOYMENT_CHECKLIST.md
```

### Environment Variables (.env.local - DO NOT COMMIT)
```
NEXT_PUBLIC_SITE_URL=https://rootinize.team
# Add any API keys here
```

## 🚀 Deployment to Hostinger VPS

### 1. Push to GitHub
```bash
git add .
git commit -m "Deploy Rootinize website with complete features"
git push origin master
```

### 2. VPS Setup (Hostinger)
```bash
# SSH into your VPS
ssh user@your-vps-ip

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git
sudo apt-get install git

# Clone repository
git clone https://github.com/your-username/rootinize-updated.git
cd rootinize-updated

# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# OR use PM2 for process management
npm install -g pm2
pm2 start npm --name "rootinize" -- start
pm2 save
pm2 startup
```

### 3. Nginx Configuration (for Hostinger)
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

### 4. SSL Certificate (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## 🐛 Known Issues & Testing

### Test Before Deployment
1. [ ] Test all navigation links
2. [ ] Test contact form submission
3. [ ] Test CTA buttons (Cal.com links)
4. [ ] Test responsive design on different devices
5. [ ] Test form validation and error messages
6. [ ] Test keyboard navigation in contact form

### Webhook Testing
- Contact form sends data to: `https://n8n.rootinize.team/webhook-test/contact-me`
- Test with sample data to ensure webhook is receiving data
- Check n8n workflow for proper data processing

## 📞 Support
- Contact: contact@rootinize.team
- Phone: +639553624405
- Address: Cebu City, Philippines, 6000

## 🔄 Updates & Maintenance
- Regular dependency updates: `npm update`
- Security patches: Monitor GitHub security alerts
- Content updates: Edit component files in `/components`
- Form webhook: Update in `components/contact.tsx`

---
**Last Updated:** April 8, 2026
**Version:** 1.0.0
**Status:** Ready for Deployment