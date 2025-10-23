# Paper Shredding Exeter

A focused, local paper shredding website targeting the Exeter area using the generic domain name strategy.

## 🎯 Strategy

This website implements the generic domain name SEO strategy with:
- **Exact-match domain**: `papershreddingexeter.co.uk`
- **Local focus**: Specifically targeting Exeter and surrounding areas
- **Service-specific content**: Concentrated on paper shredding services
- **Same design language**: Consistent with the main CCS website

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to this project:
```bash
cd papershreddingexeter
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Technology Stack

- **Framework**: Next.js 15.1.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Google Analytics (optional)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── areas-served/      # Areas served page
│   ├── services/          # Service pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx         # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── Logo.tsx           # Brand logo
│   └── QuoteModal.tsx     # Quote request modal
└── lib/                   # Utilities and configurations
```

## 🎨 Design Principles

- **Exeter-focused**: All content specifically mentions Exeter
- **Clean & Professional**: Trust-building design for security services
- **Mobile-first**: Responsive design optimized for all devices
- **Fast Loading**: Optimized for Core Web Vitals and SEO
- **Conversion-focused**: Clear CTAs and quote requests

## 📈 SEO Strategy

### On-Page SEO
- Title tags optimized for "paper shredding exeter"
- Meta descriptions with local keywords
- H1 tags targeting primary keywords
- Internal linking structure
- Local business schema markup

### Content Strategy
- Location-specific content throughout
- Service pages targeting related keywords
- Areas served page for local SEO
- Local area mentions in copy

### Technical SEO
- Fast loading times
- Mobile optimization
- Clean URL structure
- Proper heading hierarchy

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Works with standard build commands
- **Cloudflare Pages**: Compatible with Next.js
- **Traditional hosting**: Use `npm run build` and `npm start`

## 📊 Analytics & Tracking

Set up these environment variables for tracking:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- `NEXT_PUBLIC_ADS_CONVERSION_ID` - Google Ads conversion tracking

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Content Management

### Adding New Areas
Edit the areas list in `src/app/areas-served/page.tsx`

### Updating Contact Information
Update contact details in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx` 
- `src/app/contact/page.tsx`

### Modifying Services
Service information is in:
- `src/app/page.tsx` (homepage services section)
- `src/app/services/` (individual service pages)

## 🎯 Key Features

- **Quote Modal**: Integrated quote request system
- **Mobile Menu**: Responsive navigation
- **Service Pages**: Detailed service descriptions
- **Areas Served**: Comprehensive location coverage
- **Contact Forms**: Multiple contact options
- **SEO Optimized**: Built for search visibility

## 🔗 Integration with Main Site

This site complements the main CCS website by:
- Targeting specific local keywords
- Providing location-focused content
- Cross-linking where appropriate
- Maintaining brand consistency

## 📞 Support

For technical support or questions about this implementation, contact the development team.

---

Built with ♥ for Paper Shredding Exeter