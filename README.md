# Batte Akhsam Portfolio Website

A stunning, modern professional portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. The website demonstrates cutting-edge web development practices while showcasing your professional achievements.

## ✨ Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Smooth Animations**: Framer Motion for elegant transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Accessible**: Semantic HTML, proper contrast ratios, keyboard navigation
- **Performance Optimized**: Next.js image optimization, code splitting, lazy loading
- **Dark Theme**: Professional dark mode with cyan/blue gradient accents
- **Interactive Elements**: Hover effects, animated scroll, parallax backgrounds
- **SEO Ready**: Proper meta tags, structured data, Open Graph support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd /Users/user/Documents/axoblade/axoblade.com
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### Update Personal Information

Edit `src/app/page.tsx` to customize:

1. **Hero Section** - Update your name, title, and description (lines 100-120)
2. **About Section** - Add your background and achievements (lines 190-230)
3. **Experience** - Update your work history (lines 280-310)
4. **Skills** - List your technical expertise (lines 340-370)
5. **Projects** - Showcase your best work (lines 410-450)
6. **Contact** - Update your email and social links (lines 495-520)

### Styling Customization

- **Colors**: Edit `tailwind.config.ts` to change the cyan/blue theme
- **Fonts**: Modify the `font-family` in `src/app/globals.css`
- **Typography**: Adjust text sizes in `tailwind.config.ts`

### Adding Sections

To add new sections:

1. Create a new section component in `src/app/page.tsx`
2. Wrap it with `motion.div` for animations
3. Add navigation link in the navbar
4. Use the same styling patterns for consistency

### Deploying to Production

#### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

#### Deploy to Other Platforms

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main portfolio page
package.json             # Dependencies and scripts
tailwind.config.ts       # Tailwind CSS configuration
tsconfig.json           # TypeScript configuration
next.config.ts          # Next.js configuration
```

## 🎨 Design Details

### Color Palette

- **Background**: Dark slate (#0a0e27 to #1a1f3a)
- **Primary Accent**: Cyan (#06b6d4)
- **Secondary**: Blue (#3b82f6)
- **Text**: Light slate (#e2e8f0)

### Animations

- Floating background orbs
- Staggered entrance animations
- Smooth scroll-based transitions
- Hover effects with scale and color changes
- Continuous rotating elements

## 🔧 Configuration

### Meta Data

Edit `src/app/layout.tsx` to update:

- Site title
- Meta description
- Open Graph tags
- Website URL

### Navigation Links

Update the navbar navigation in `src/app/page.tsx` (lines 75-85)

## 📱 Responsive Design

The website is fully responsive:

- **Mobile** (< 640px): Single column layouts, adjusted font sizes
- **Tablet** (640px - 1024px): Two column layouts
- **Desktop** (> 1024px): Full featured layouts with all effects

## ⚡ Performance Tips

1. **Images**: Replace text-based badges with optimized image imports
2. **Lazy Loading**: Components use `whileInView` for component animations
3. **Code Splitting**: Each section is optimized for performance
4. **Streaming**: Next.js automatically handles streaming responses

## 🌐 SEO Best Practices

- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Meta descriptions
- ✅ Open Graph tags for social sharing
- ✅ Responsive design for mobile-first indexing
- ✅ Fast page load times
- ✅ Semantic HTML

## 🎯 CV Integration

To integrate your actual CV from `cv/Batte Akhsam CV 2026.pdf`:

1. Extract key achievements and experiences
2. Update the Experience section with actual dates and companies
3. Add specific projects you've shipped
4. Include technologies you've worked with
5. Add metrics/impact (users, revenue, growth, etc.)

## 🚀 Next Steps

1. [ ] Update all personal information
2. [ ] Add your project links
3. [ ] Update social media links
4. [ ] Add your email address
5. [ ] Customize color scheme if desired
6. [ ] Add project images/screenshots
7. [ ] Deploy to production
8. [ ] Set up custom domain (batte.dev)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

**Port 3000 already in use?**

```bash
npm run dev -- -p 3001
```

**Dependencies issues?**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Styling not appearing?**

```bash
npm install
npm run dev
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## 📄 License

This portfolio template is yours to customize and deploy. Feel free to modify it to your needs.

---

**Built with passion and state-of-the-art web technologies.** ✨
