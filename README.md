# Supreme Portfolio - Juan Diego Arce Castro

A premium, enterprise-grade personal portfolio designed to impress international recruiters. Built specifically for GitHub Pages with zero dependencies beyond GSAP for animations.

## 🎯 Features

- **Premium Design**: Enterprise aesthetic with sophisticated visuals
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Animated Background**: Canvas-based data network visualization
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading, smooth animations
- **Accessibility First**: WCAG AA compliant, keyboard navigation, screen reader friendly
- **SEO Optimized**: Structured data, meta tags, OpenGraph support
- **Interactive Elements**: Skill filters, project modals, animated metrics
- **Zero Build Required**: Pure HTML/CSS/JS ready for GitHub Pages

## 🚀 Deployment to GitHub Pages

### Method 1: Quick Deploy (Recommended)

1. **Create a GitHub repository**
   ```powershell
   # Navigate to your portfolio directory
   cd "C:\Users\diego\OneDrive\Documents\Portafolio CV"
   
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit: Supreme portfolio"
   ```

2. **Push to GitHub**
   ```powershell
   # Create a new repository on GitHub named: yourusername.github.io
   # Then run these commands:
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Click Save

4. **Visit your site**
   - Your portfolio will be live at: `https://yourusername.github.io`
   - Usually takes 2-5 minutes for first deployment

### Method 2: Custom Domain

If you want to use a custom domain (e.g., `juandiegoarce.com`):

1. Follow Method 1 steps 1-3
2. In repository settings → Pages → Custom domain
3. Add a `CNAME` file to your repository root with your domain
4. Configure DNS with your domain provider (A records or CNAME)

## ✏️ Customization Guide

### 1. Personal Information

**Update in `index.html`:**

- **Line 10-15**: Meta descriptions and social media info
- **Line 47-54**: JSON-LD structured data (name, LinkedIn, GitHub)
- **Lines 75-95**: Hero section (name, title, description)
- **Lines 97-120**: Quick Scan card bullets
- **Lines 540-545**: Email address
- **Lines 551-563**: LinkedIn URL
- **Lines 565-577**: GitHub URL

### 2. Add Your CV

1. Export your CV as PDF
2. Name it: `Juan-Diego-Arce-Castro-CV.pdf`
3. Place it in: `assets/cv/`
4. The download button will work automatically

### 3. Update Content

**About Section** (Line 165-187):
- Replace with your professional summary
- Keep it concise and value-focused

**Skills Section** (Lines 218-340):
- Update skill cards with your technologies
- Modify `data-category` attributes for filters

**Experience Section** (Lines 352-503):
- Update with your work history
- Keep the structured format for readability

**Projects Section** (Lines 517-625):
- Update project cards with your work
- Modify modals (Lines 651-803) with project details

### 4. Social Links

Replace placeholder URLs:
- **LinkedIn**: Search for `linkedin.com/in/yourprofile`
- **GitHub**: Search for `github.com/yourusername`
- **Email**: Update `your.email@example.com`

### 5. Color Scheme (Optional)

To customize colors, edit `css/style.css`:

```css
/* Lines 20-35: Light theme colors */
--accent-primary: hsl(230, 70%, 55%);  /* Primary brand color */
--accent-secondary: hsl(190, 75%, 45%); /* Secondary accent */

/* Lines 92-97: Dark theme colors */
--accent-primary: hsl(230, 80%, 65%);
```

### 6. Background Animation

Adjust network density in `js/background.js`:

```javascript
// Line 12-15
nodeCount: 50,  // Number of nodes (more = denser)
connectionDistance: 150,  // Connection range
```

## 📁 Project Structure

```
Portafolio CV/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete design system
├── js/
│   ├── main.js            # Interactive features
│   └── background.js      # Animated background
├── assets/
│   ├── cv/                # Place your CV PDF here
│   ├── icons/             # Custom icons (optional)
│   └── images/            # Profile/project images (optional)
└── README.md              # This file
```

## 🎨 Design Philosophy

This portfolio follows a **premium enterprise aesthetic**:

- **Typography**: Clean, modern Inter font
- **Colors**: Sophisticated HSL-based palette with smooth transitions
- **Spacing**: Consistent 8px system for visual rhythm
- **Animations**: Subtle, purposeful, performance-optimized
- **Glass-morphism**: Modern frosted glass effects
- **Accessibility**: Full keyboard navigation, screen reader support

## 🔧 Troubleshooting

### Site not loading on GitHub Pages

1. Check repository name is `yourusername.github.io`
2. Verify Pages is enabled in Settings
3. Ensure `main` branch is selected as source
4. Wait 5-10 minutes for propagation
5. Clear browser cache and try again

### Theme toggle not working

1. Check browser console for errors
2. Ensure JavaScript files are loaded correctly
3. Verify localStorage is enabled in browser

### Animations not smooth

1. Clear browser cache
2. Disable browser extensions temporarily
3. Check if "Reduce Motion" is enabled in OS settings

### Links not working

1. Verify all URLs are updated from placeholders
2. Check for `https://` in external links
3. Test with browser console open for errors

## 🚀 Performance Tips

1. **Optimize images**: Use WebP format, compress to <200KB
2. **CV file size**: Keep PDF under 1MB
3. **Test on mobile**: Use Chrome DevTools device emulation
4. **Lighthouse score**: Run in Chrome DevTools for performance audit

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This portfolio template is custom-built for Juan Diego Arce Castro. Feel free to use it as inspiration, but please customize it to reflect your own brand and personality.

## 🎯 Recruiter-Focused Design

This portfolio is specifically designed to:

1. **Communicate value in <10 seconds** via Quick Scan card
2. **Build trust** with detailed experience and concrete metrics
3. **Demonstrate expertise** through project depth and technical breadth
4. **Show professionalism** with premium design and attention to detail
5. **Enable action** with clear CTAs and easy contact methods

## 📞 Support

If you encounter issues:

1. Check this README first
2. Review browser console for errors
3. Verify all customization steps completed
4. Test in incognito/private browsing mode

---

**Last Updated**: February 2026

**Built with**: HTML5, CSS3, JavaScript (ES6+), GSAP

**Hosted on**: GitHub Pages
