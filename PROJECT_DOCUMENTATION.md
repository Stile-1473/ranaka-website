# Ranaka Legal Aid Trust Website

A professional, fully responsive multi-page website for Ranaka Legal Aid Trust - a legal aid organization dedicated to providing access to justice for all.

## Project Overview

This is a modern, clean, and professional website built with React, featuring:

- **7 Main Pages**: Home, About Us, Legal Services, Get Legal Help, Our Team, Resources, and Contact Us
- **Responsive Design**: Mobile-first approach with full desktop optimization
- **Professional UI**: Clean, calm, trustworthy design with a color-coded visual system
- **Functional Forms**: Complete form validation for legal aid applications and contact inquiries
- **SEO Optimized**: Semantic HTML, proper heading hierarchy, and meta tags
- **Accessible**: WCAG-friendly components and navigation

## Tech Stack

- **React 19** - Modern UI library with functional components
- **React Router** - Client-side routing for multi-page navigation
- **Tailwind CSS** - Utility-first CSS with @tailwindcss/vite for optimal performance
- **react-icons** - Professional icon library (no external emoji or icon libraries)
- **Vite** - Lightning-fast build tool and dev server

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx      # Responsive navigation with mobile menu
│   │   └── Footer.jsx          # Footer with contact info and legal disclaimer
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero and service overview
│   │   ├── AboutUs.jsx         # Mission, vision, values, and background
│   │   ├── LegalServices.jsx   # Detailed service offerings
│   │   ├── GetLegalHelp.jsx    # Application form with validation
│   │   ├── OurTeam.jsx         # Team profiles and expertise
│   │   ├── Resources.jsx       # Legal education, FAQs, and downloads
│   │   └── ContactUs.jsx       # Contact form and office information
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       ├── Card.jsx            # Reusable card component
│       ├── Section.jsx         # Section wrapper for consistent spacing
│       └── Form.jsx            # Form components (Input, Textarea, Select, Checkbox)
├── utils/                      # Utility functions (for future use)
├── App.jsx                     # Main app with routing
├── main.jsx                    # Entry point
├── index.css                   # Global styles with Tailwind
└── App.css                     # App-specific animations and styles
```

## Color Palette

- **Primary Green**: #1E6F5C - Main brand color for headers and CTAs
- **White**: #FFFFFF - Secondary color for backgrounds and text contrast
- **Accent Gold**: #C9A227 - Highlights and premium elements
- **Text Dark**: #1F2937 - Primary text color
- **Text Light**: #6B7280 - Secondary text and descriptions

## Key Features

### 1. Home Page
- Hero section with tagline and dual CTAs
- Quick facts statistics
- Service overview cards
- Who We Serve section
- Why Choose Us section
- Call-to-action section

### 2. About Us Page
- Mission, Vision, and Values
- Background and history
- Legal compliance information
- Community impact statistics
- Team testimonials

### 3. Legal Services Page
- 6 main practice areas:
  - Family Law
  - Criminal Defense
  - Labor & Employment Law
  - Land & Property Disputes
  - Gender-Based Violence Support
  - Human Rights Advocacy
- Detailed descriptions and eligibility criteria
- Service process information
- Fee structure and eligibility

### 4. Get Legal Help Page
- Comprehensive application form with validation:
  - Personal information fields
  - Case category selection
  - Case description textarea
  - Income range indication
  - Confidentiality agreements
- Real-time form validation
- Privacy and confidentiality notices
- Success confirmation message

### 5. Our Team Page
- Professional team member profiles
- Diverse expertise and specialties
- Educational qualifications
- Contact information
- Team strengths and commitment to excellence

### 6. Resources Page
- Educational articles ("Know Your Rights")
- Downloadable resources and templates
- FAQ section with expandable items
- Video tutorial section
- Community legal education programs

### 7. Contact Us Page
- Contact information display
- Contact form with validation
- Office location and hours
- Multiple contact methods
- Accessibility information
- Transportation guidance
- Emergency contact details

### 8. Navigation & Footer
- **Navigation**: Sticky header with mobile hamburger menu
- **Footer**: Comprehensive footer with quick links, contact info, social media, and legal disclaimer

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory**:
   ```bash
   cd /home/ghost1473/Desktop/Projects/ranakawebsitedemo
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or the next available port)

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## Configuration Files

### vite.config.js
- Configured with Tailwind CSS vite plugin
- Optimized for React development

### tailwind.config.js
- Custom color extensions
- Font family configurations
- Animation keyframes

### index.html
- SEO meta tags
- Viewport configuration
- Favicon setup

## Responsive Design Features

- **Mobile First**: Designed for mobile devices first, scaled up for tablets and desktops
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

- **Mobile Navigation**: Hamburger menu on screens below md (768px)
- **Flexible Grids**: Layout adapts from 1 column (mobile) to 2-4 columns (desktop)
- **Touch-Friendly**: Buttons and interactive elements sized for touch interaction

## Accessibility Features

- **Semantic HTML**: Proper use of header, main, section, footer tags
- **ARIA Labels**: Navigation and interactive elements have proper labels
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Clear focus indicators for keyboard users
- **Form Validation**: Clear error messages and validation feedback
- **Screen Reader Friendly**: Proper heading hierarchy and alternative text

## SEO Optimization

- **Meta Tags**: Title, description, keywords in index.html
- **Open Graph Tags**: For social media sharing
- **Semantic HTML**: Proper heading hierarchy (H1 → H3)
- **URL Structure**: Clean, descriptive URLs via React Router
- **Mobile Responsive**: Mobile-friendly design for better rankings
- **Performance**: Fast load times with optimized Vite build
- **Legal Keywords**: Integrated throughout:
  - "legal aid"
  - "access to justice"
  - "pro bono legal services"
  - "community legal support"
  - "human rights law"

## Legal Compliance

- **Professional Disclaimer**: Comprehensive legal disclaimer in footer
- **Confidentiality Notices**: Privacy notices on sensitive forms
- **Data Protection**: GDPR-compliant form handling
- **Attorney-Client Privilege**: Clear communication about privilege

## Form Validation

### Application Form Validation
- Required field checking
- Email format validation
- Phone number validation
- Minimum character requirements
- Real-time error feedback
- Clear success confirmation

### Contact Form Validation
- Required field checking
- Email format validation
- Message content validation
- User-friendly error messages

## Customization Guide

### Changing Colors
Edit the color values in `tailwind.config.js` or update CSS variables in `src/index.css`:
```css
--color-primary: #1E6F5C;
--color-accent: #C9A227;
```

### Adding New Pages
1. Create new component in `src/components/pages/`
2. Import in `src/App.jsx`
3. Add route to `<Routes>` in App.jsx
4. Add navigation link in `Navigation.jsx`

### Adding Team Members
Edit the `teamMembers` array in `src/components/pages/OurTeam.jsx` with new member details.

### Updating Contact Information
Update the following files:
- `src/components/layout/Footer.jsx` - Footer contact details
- `src/components/pages/ContactUs.jsx` - Contact page information

## Performance Optimizations

- **Lazy Loading**: Pages loaded on demand via React Router
- **CSS Optimization**: Tailwind purges unused styles in production
- **Image Optimization**: Recommend using optimized images
- **Component Splitting**: Reusable components for code efficiency
- **Vite Optimization**: Fast HMR for development, optimized bundles for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Workflow

### Running Tests
Currently, testing setup can be added with Vitest or Jest.

### Code Linting
```bash
npm run lint
```

### Formatting
For code formatting, configure ESLint and Prettier as needed.

## Deployment

### Build Process
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### Deployment Options
- **Vercel**: Push to GitHub and deploy directly from Vercel
- **Netlify**: Connect repository to Netlify
- **Traditional Hosting**: Upload `dist/` folder to any web server
- **Docker**: Create Dockerfile for containerized deployment

### Environment Variables
Create a `.env` file for environment-specific settings:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=info@ranakalegal.org
```

## Maintenance & Updates

- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Test on multiple devices and browsers regularly
- Update team member profiles and service descriptions as needed
- Monitor contact form submissions
- Keep legal compliance information current

## Support & Documentation

For questions or modifications:
1. Review React documentation: https://react.dev
2. Check React Router docs: https://reactrouter.com
3. Tailwind CSS guide: https://tailwindcss.com
4. Vite documentation: https://vite.dev

## License

This website is proprietary to Ranaka Legal Aid Trust. All rights reserved.

---

**Last Updated**: January 29, 2026

For more information about Ranaka Legal Aid Trust, visit the website.
