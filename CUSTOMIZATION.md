# Portfolio Website - Customization Guide

## Quick Start

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Open http://localhost:3000 in your browser
4. Begin customizing the content as detailed below

---

## 🎯 Customization Sections

### 1. Personal Information (Data File)

**File**: `src/data/portfolio.ts`

Update your contact information, social links, and personal details:

```typescript
personal: {
  name: 'Your Name',
  title: 'Your Job Title',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  website: 'https://yourdomain.com',
}
```

### 2. Hero Section

**File**: `src/app/page.tsx` (Lines 100-120)

The hero section is your landing area. Update:

- Your name and title
- Your headline/tagline
- Call-to-action buttons

```typescript
// Hero section headline
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  Your Headline Here
</span>

// Hero description
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
  Your professional summary and value proposition
</p>
```

### 3. About Section

**File**: `src/app/page.tsx` (Lines 160-250)

Tell your story:

- Background and experience
- What makes you unique
- Your approach to software development
- Statistics/achievements

Update the `about` section in `src/data/portfolio.ts`:

```typescript
about: {
  intro: 'Your background and professional journey...',
  philosophy: 'Your approach and values...',
  stats: [
    { value: '10+', label: 'Years Experience' },
    // Add your actual metrics
  ],
}
```

### 4. Experience Section

**File**: `src/app/page.tsx` (Lines 260-310) and `src/data/portfolio.ts`

List your work history in reverse chronological order:

```typescript
experience: [
	{
		role: "Senior Software Developer",
		company: "Current Company",
		period: "2023 - Present",
		description: "What you did and achieved...",
		highlights: [
			"Specific achievement 1",
			"Specific achievement 2",
			"Specific achievement 3",
		],
	},
	// Add more positions
];
```

**Tips**:

- Include quantifiable metrics (% improvements, user growth, etc.)
- Highlightleadership and impact
- Focus on technologies and methodologies
- Order by most recent first

### 5. Skills Section

**File**: `src/app/page.tsx` (Lines 320-380) and `src/data/portfolio.ts`

Showcase your technical expertise across three categories:

```typescript
skills: [
	{
		category: "Frontend",
		icon: "Code2",
		skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
	},
	{
		category: "Backend",
		icon: "Zap",
		skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
	},
	{
		category: "DevOps & Cloud",
		icon: "Target",
		skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
	},
];
```

**Tips**:

- Order skills by proficiency level
- Include both languages and tools
- Remove skills you're not comfortable discussing
- Add skills that match your target roles

### 6. Projects Section

**File**: `src/app/page.tsx` (Lines 400-470) and `src/data/portfolio.ts`

Highlight your best work:

```typescript
projects: [
	{
		title: "Project Title",
		description: "What the project does and its impact",
		tech: ["React", "Node.js", "PostgreSQL"],
		link: "https://github.com/yourusername/project",
		impact: "Quantifiable results (users, revenue growth, etc.)",
	},
];
```

**Tips**:

- Choose 4-5 of your BEST projects
- Include metrics/impact (users, growth, scale)
- Link to GitHub repos or deployed applications
- Vary the types of projects (SaaS, tools, open-source, etc.)
- Focus on problems solved, not technologies used

### 7. Contact Section

**File**: `src/app/page.tsx` (Lines 480-530)

Update your contact information:

```typescript
contact: {
  title: 'Let\'s Work Together',
  description: 'Your invitation message...',
  methods: [
    { type: 'email', label: 'Email', href: 'mailto:you@example.com' },
    { type: 'github', label: 'GitHub', href: 'https://github.com/yourusername' },
    { type: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  ],
}
```

---

## 🎨 Design Customization

### Color Scheme

**File**: `tailwind.config.ts`

The default uses cyan/blue. To change:

```typescript
theme: {
  extend: {
    colors: {
      dark: '#0f172a',           // Background dark
      darker: '#0a0e27',         // Background darker
      accent: '#06b6d4',         // Primary accent (cyan)
      // Add your colors here
    },
  },
}
```

Popular color combinations:

- **Purple/Violet**: `#a78bfa` to `#8b5cf6`
- **Green/Emerald**: `#10b981` to `#059669`
- **Orange/Amber**: `#f59e0b` to `#d97706`
- **Red/Rose**: `#f43f5e` to `#e11d48`

### Fonts

**File**: `src/app/globals.css`

To change the font family:

```css
body {
	font-family: "Your Font Family", sans-serif;
}
```

Popular web fonts:

- **Inter**: Modern and clean
- **JetBrains Mono**: For a technical feel
- **Poppins**: Contemporary and friendly
- **Space Mono**: Bold and distinctive

### Layout Adjustments

- **Container width**: Search for `max-w-6xl` and change to `max-w-7xl`, `max-w-5xl`, etc.
- **Section padding**: Adjust `py-20`, `py-32`, `py-40` for spacing
- **Gap between elements**: Modify `gap-8`, `gap-12` values

---

## 📱 Adding Images

### Avatar Image

Replace the text-based avatar circle with an image:

```typescript
// In hero section, add an image element
<Image
  src="/avatar.jpg"
  alt="Your name"
  width={128}
  height={128}
  className="rounded-full border-4 border-cyan-400"
/>
```

Then place your image at: `public/avatar.jpg`

### Project Images/Screenshots

```typescript
// In projects section
<Image
  src={`/projects/${projectId}.jpg`}
  alt={project.title}
  width={400}
  height={300}
  className="rounded-lg"
/>
```

---

## 🔗 Connecting External Links

### GitHub Projects

```typescript
link: "https://github.com/yourusername/project-name";
```

### Deployed Projects

```typescript
link: "https://project-domain.com";
```

### Portfolio Platforms

Link to portfolio sites like:

- Behance
- Dribbble
- CodePen
- Dev.to Articles

---

## 🚀 Deployment Options

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy your site.

### Netlify

```bash
npm run build
# Then drag-and-drop the .next folder to Netlify
```

### Railway, Render, etc.

Follow their Next.js deployment guides.

### Custom Domain

1. Purchase domain from Namecheap, GoDaddy, etc.
2. Point DNS records to your hosting
3. Update meta tags with your domain

Update in `src/app/layout.tsx`:

```typescript
url: "https://yourdomain.com";
```

---

## 📊 Analytics and SEO

### Google Analytics

Add to `src/app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
  strategy="afterInteractive"
/>
```

### Meta Tags

Update in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
	title: "Your Name | Your Title",
	description: "Your professional description",
	keywords: ["keyword1", "keyword2", "keyword3"],
};
```

---

## ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Added actual project links
- [ ] Updated social media links
- [ ] Added your email address
- [ ] Customized color scheme (optional)
- [ ] Added profile picture
- [ ] Updated company/position history
- [ ] Added project descriptions and technologies
- [ ] Updated SEO meta tags
- [ ] Tested on mobile devices
- [ ] Tested all links work
- [ ] Deployed to production
- [ ] Set up custom domain
- [ ] Added Google Analytics (optional)
- [ ] Shared on social media

---

## 🎓 Making It Even More Impressive

### Add Advanced Features

1. **Dark/Light Mode Toggle**
   - Add theme switcher in navbar
   - Store preference in localStorage

2. **Blog Section**
   - Use Markdown for blog posts
   - Add reading time estimates
   - Create blog index

3. **Testimonials**
   - Add carousel of client/colleague testimonials
   - Include photos and LinkedIn links

4. **Newsletter Signup**
   - Integrate with Mailchimp/Substack
   - Add signup form to footer

5. **Interactive Projects**
   - Embed live demos
   - Show code snippets
   - Include before/after comparisons

6. **Animations**
   - Add progress bars for skills
   - Animate counters for stats
   - Add scroll-triggered animations

### Optimization Tips

- Use `next/image` for optimized images
- Lazy load images with `loading="lazy"`
- Compress images before upload
- Use WebP format where possible
- Leverage Next.js caching strategies

---

## 🐛 Troubleshooting

**Issue**: Styles not loading

- Run: `npm install` and `npm run dev`
- Clear `.next` folder: `rm -rf .next`

**Issue**: Images not showing

- Ensure images are in `public/` folder
- Use correct relative paths

**Issue**: Animations not smooth

- Check browser performance (DevTools)
- Reduce number of simultaneous animations
- Test on different devices

**Issue**: Build fails

- Check for TypeScript errors: `npm run build`
- Ensure all imports are correct
- Check for missing dependencies

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Good luck! Your portfolio is going to be amazing! 🎉
