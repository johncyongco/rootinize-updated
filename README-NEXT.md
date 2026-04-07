# Rootinize Premium AI Automation Agency (Next.js Version)

A modern, premium landing page for an AI automation agency built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- **Next.js 14 App Router** - Modern React framework with server components
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **TypeScript** - Type-safe development
- **Premium Design** - Dark elegant theme with purple/violet accents
- **Responsive Layout** - Mobile-first responsive design
- **Subtle Animations** - Smooth transitions and hover effects
- **Component-Based** - Reusable, maintainable components
- **Performance Optimized** - Fast loading and smooth interactions

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
rootinize-updated/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page composition
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # Reusable React components
│   ├── navbar.tsx         # Navigation with mobile menu
│   ├── hero.tsx           # Hero section with animations
│   ├── trust-bar.tsx      # Trust indicators
│   ├── services.tsx       # Services showcase
│   ├── work-showcase.tsx  # Project portfolio
│   ├── process.tsx        # Process steps
│   ├── testimonials.tsx   # Client testimonials
│   ├── why-choose-us.tsx  # Benefits section
│   ├── faq.tsx            # FAQ with accordion
│   ├── final-cta.tsx      # Call to action
│   └── footer.tsx         # Footer with links
├── lib/                   # Utility functions
│   └── utils.ts          # CSS class utilities
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Design System

### Colors
- **Background**: `hsl(240 10% 4%)` (Deep Space Black)
- **Primary**: `hsl(267 100% 63%)` (Purple/Violet Gradient)
- **Text**: Refined contrast hierarchy
- **Borders**: Subtle gradients and glass effects

### Typography
- **Headings**: Space Grotesk (Modern, geometric)
- **Body**: Inter (Clean, readable)
- **Scale**: Clear visual hierarchy

### Components
- **Glass Morphism**: Translucent cards with backdrop blur
- **Gradient Borders**: Purple gradients on hover
- **Animated Elements**: Smooth transitions and micro-interactions
- **Responsive Grids**: Flexible layouts for all devices

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: 267 100% 63%;
  --background: 240 10% 4%;
  /* ... */
}
```

### Content
Update the component files in `components/` to match your business needs.

### Fonts
Change the font imports in `app/layout.tsx`:
```tsx
const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
```

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Build for Production
```bash
npm run build
npm start
```

## Performance

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font system
- **Code Splitting**: Automatic with Next.js
- **Minification**: Built-in optimization
- **Lazy Loading**: Component-level code splitting

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This design is for demonstration purposes. Feel free to use it for your projects.

---

**Built with Next.js 14 • Tailwind CSS • TypeScript**