# Quick Start Guide - Ranaka Legal Aid Trust Website

## Getting Started in 30 Seconds

### 1. Start the Development Server
```bash
cd /home/ghost1473/Desktop/Projects/ranakawebsitedemo
npm run dev
```

Open your browser to `http://localhost:5176` (or the port shown in terminal)

### 2. Explore the Website
- **Home**: `/` - Landing page with services overview
- **About Us**: `/about` - Mission, vision, and background
- **Legal Services**: `/services` - Detailed service descriptions
- **Get Legal Help**: `/get-help` - Application form
- **Our Team**: `/team` - Team member profiles
- **Resources**: `/resources` - Legal education and FAQs
- **Contact Us**: `/contact` - Contact form and office info

## Key Files to Edit

### Update Business Information
- **Contact Details**: `src/components/layout/Footer.jsx` (lines 50-60)
- **Office Hours**: `src/components/pages/ContactUs.jsx` (lines 15-25)
- **Team Members**: `src/components/pages/OurTeam.jsx` (lines 8-70)

### Customize Colors
Edit `tailwind.config.js`:
```javascript
extend: {
  colors: {
    primary: '#1E6F5C',      // Change brand color
    accent: '#C9A227',        // Change accent color
  },
}
```

### Add New Pages
1. Create component: `src/components/pages/YourPage.jsx`
2. Add import in `src/App.jsx`
3. Add route: `<Route path="/your-page" element={<YourPage />} />`
4. Add navigation link in `src/components/layout/Navigation.jsx`

## Common Tasks

### Update Team Member
Edit `src/components/pages/OurTeam.jsx`:
```javascript
{
  name: 'John Doe',
  role: 'Senior Attorney',
  specialty: 'Family Law',
  bio: 'John has 10+ years of experience...',
  education: 'LLB (University Name)',
}
```

### Add New Service
Edit `src/components/pages/LegalServices.jsx`:
```javascript
{
  title: 'Your Service',
  icon: FiIcon,
  areas: ['Area 1', 'Area 2'],
  // ... more details
}
```

### Change Hero Title
Edit `src/components/pages/Home.jsx` line ~50:
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
  Your New Title Here
</h1>
```

## Build & Deploy

### Build for Production
```bash
npm run build
```
Output will be in `dist/` folder

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Deploy automatically on push

## Form Validation

The forms have built-in validation:
- ✓ Required fields
- ✓ Email format checking
- ✓ Phone number validation
- ✓ Character minimum/maximum
- ✓ Real-time error feedback

## Mobile Testing

Test responsiveness:
- Chrome DevTools: F12 → Toggle device toolbar (Ctrl+Shift+M)
- Test on multiple device sizes:
  - Mobile: 375px
  - Tablet: 768px
  - Desktop: 1920px

## Useful npm Commands

```bash
# Start dev server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview

# Check for linting issues
npm run lint

# Update all packages
npm update
```

## Common Issues

### Port Already in Use
The app automatically tries ports 5173-5176. If all in use:
```bash
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied
```bash
# Rebuild Tailwind CSS
npm run build
```

## Need Help?

1. Check `PROJECT_DOCUMENTATION.md` for detailed docs
2. Review component comments in source code
3. Check React Router docs: https://reactrouter.com
4. Tailwind CSS reference: https://tailwindcss.com

---

**Happy coding!** 🚀
