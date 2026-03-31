# Project Structure & File Guide

```
axoblade.com/
├── src/
│   ├── app/
│   │   ├── page.tsx          👈 Main portfolio page (edit this to customize!)
│   │   ├── layout.tsx        Layout with metadata & SEO setup
│   │   └── globals.css       Global styles & animations
│   └── data/
│       └── portfolio.ts      Centralized data (optional - for data-driven approach)
│
├── public/                   Image assets folder (add your avatar here)
│
├── package.json             Dependencies and scripts
├── tsconfig.json            TypeScript configuration
├── tailwind.config.ts       Tailwind CSS theme & animations
├── postcss.config.js        PostCSS processing
├── next.config.ts           Next.js configuration
├── .eslintrc.json          Code quality rules
├── .gitignore              Git ignore patterns
├── .env.example            Environment variables template
│
├── README.md               Full documentation
├── QUICKSTART.md           Quick start (read this first!)
├── CUSTOMIZATION.md        Detailed customization guide
├── PORTFOLIO-HIGHLIGHTS.md What makes it impressive
└── PROJECT-STRUCTURE.md    This file
```

---

## 📋 File Reference

### Core Application Files

| File                  | Purpose                      | How to Use                              |
| --------------------- | ---------------------------- | --------------------------------------- |
| `src/app/page.tsx`    | **Main portfolio component** | Edit sections here to customize         |
| `src/app/layout.tsx`  | Root layout & meta tags      | Update site title, description, OG tags |
| `src/app/globals.css` | Global styles                | Change fonts, overall styling           |

### Configuration Files

| File                 | Purpose                            |
| -------------------- | ---------------------------------- |
| `tailwind.config.ts` | Tailwind theme, colors, animations |
| `tsconfig.json`      | TypeScript strict mode, paths      |
| `next.config.ts`     | Next.js behavior settings          |
| `postcss.config.js`  | CSS processing pipeline            |
| `package.json`       | Dependencies, scripts, metadata    |
| `.eslintrc.json`     | Code quality rules                 |

### Documentation Files

| File                      | Read When...                            |
| ------------------------- | --------------------------------------- |
| `QUICKSTART.md`           | Starting out (5-minute setup)           |
| `README.md`               | Deploying or understanding the tech     |
| `CUSTOMIZATION.md`        | Want detailed customization steps       |
| `PORTFOLIO-HIGHLIGHTS.md` | Want to know what's impressive about it |

### Development Files

| File           | Purpose                               |
| -------------- | ------------------------------------- |
| `.env.example` | Template for environment variables    |
| `.gitignore`   | What Git should ignore                |
| `public/`      | Static assets (images, favicon, etc.) |

---

## 🎯 Editing Guide by Section

### Hero Section (First thing visitors see)

**File**: `src/app/page.tsx` lines **100-135**

- Your name and title
- Main headline
- Description/tagline
- Call-to-action buttons

### About Section (Tell your story)

**File**: `src/app/page.tsx` lines **160-240**

- Your background
- What makes you unique
- Stats/achievements
- Professional philosophy

### Experience Section (Work history)

**File**: `src/app/page.tsx` lines **250-310**

- Job titles and companies
- Dates employed
- Key achievements
- Impact metrics

### Skills Section (Technical expertise)

**File**: `src/app/page.tsx` lines **320-380**

- Frontend technologies
- Backend technologies
- DevOps/Cloud technologies
- Tools and frameworks

### Projects Section (Showcase your work)

**File**: `src/app/page.tsx` lines **400-470**

- Project titles
- Descriptions and impact
- Technologies used
- Links to live demos/repos

### Contact Section (Call to action)

**File**: `src/app/page.tsx` lines **480-540**

- Email address
- GitHub profile link
- LinkedIn profile link
- Custom message

---

## 🚀 Deployment Files

### For Vercel

- `vercel.json` (optional - auto-configured)
- `next.config.ts` (already set up)

### For Netlify

- Build command: `npm run build`
- Publish directory: `.next`

### For Custom Hosting

- Run `npm run build` to create optimized build
- Run `npm start` to start production server
- Node.js 18+ required

---

## 📦 Data File (Optional)

### `src/data/portfolio.ts`

Centralized data for easy updates:

- Personal information
- Hero section content
- About section details
- Work experience
- Skills
- Projects
- Contact information

**Benefits:**

- Separates content from component logic
- Easy to reuse in multiple places
- Can be connected to CMS later
- Single source of truth for data

**How to use:**

```typescript
import { portfolioData } from "@/data/portfolio";

// Access data like:
portfolioData.personal.name;
portfolioData.experience[0].role;
```

---

## 🎨 Customization Files by Use Case

### Change Color Scheme

→ Edit `tailwind.config.ts` (colors section)

### Change Typography/Fonts

→ Edit `src/app/globals.css` (font-family)

### Add New Sections

→ Copy section in `src/app/page.tsx`, modify content

### Update Social Links

→ Edit `src/app/page.tsx` contact section

### Deploy to Production

→ Follow instructions in README.md

### Set Up Analytics

→ Update `.env.local` with GA ID

---

## 📊 Performance & Quality

### Build & Test

```bash
npm run build    # Check for errors
npm start        # Production preview
npm run lint     # Code quality check
```

### Lighthouse Score

Expected metrics:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔄 File Dependencies

```
page.tsx
├── globals.css       (styles)
├── layout.tsx        (metadata)
├── tailwind.config   (theming)
└── lucide-react      (icons)

Layout.tsx
├── Open Graph tags
├── Meta tags
└── globals.css

Configure
├── tailwind.config
├── tsconfig.json
├── package.json
└── next.config.ts
```

---

## 📝 Content Checklist by File

### Before Launching

**`src/app/page.tsx`**

- [ ] Update name and title
- [ ] Update about section
- [ ] Add work experience
- [ ] Add 4-5 projects
- [ ] Update skills
- [ ] Update email/social links

**`src/app/layout.tsx`**

- [ ] Update site title
- [ ] Update meta description
- [ ] Update OG tags
- [ ] Update website URL

**`tailwind.config.ts`**

- [ ] (Optional) Customize colors
- [ ] (Optional) Customize animations

**Other files**

- [ ] Add avatar to `public/avatar.jpg`
- [ ] Update `.env.local` if needed

---

## 🎓 Learning Path

1. **Start**: Read `QUICKSTART.md`
2. **Understand**: Read `README.md`
3. **Customize**: Use `CUSTOMIZATION.md`
4. **Appreciate**: Read `PORTFOLIO-HIGHLIGHTS.md`
5. **Deploy**: Follow deployment guide in `README.md`

---

## 📞 Quick Help

| Question                 | Answer                           |
| ------------------------ | -------------------------------- |
| Where do I edit content? | `src/app/page.tsx`               |
| How do I change colors?  | `tailwind.config.ts`             |
| Where do I put images?   | `public/` folder                 |
| How do I deploy?         | `README.md` → Deployment section |
| How do I customize?      | `CUSTOMIZATION.md`               |

---

**Ready to customize?** Open `QUICKSTART.md` or `src/app/page.tsx` and start editing! ✨
