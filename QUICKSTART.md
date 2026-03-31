# Quick Start Guide - 5 Minutes to Live

Follow these steps to get your portfolio live in 5 minutes:

## Step 1: Install Dependencies (1 minute)

```bash
cd /Users/user/Documents/axoblade/axoblade.com
npm install
```

Wait for all packages to install.

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000)

You should see a stunning, fully-functional portfolio! 🎉

## Step 3: Update Your Name & Title (2 minutes)

Edit `src/app/page.tsx`:

1. Find line ~105: Change "Batte Akhsam" to your name
2. Find line ~108: Change "Senior Software Developer" to your title
3. Find line ~113: Update your headline
4. Find line ~121: Update your description

**That's it!** The page auto-refreshes and you'll see changes instantly.

## Step 4: Update Contact Info (1 minute)

Find these lines and update:

- Line ~519: Change `mailto:batte@example.com` to your email
- Line ~520: Change GitHub link
- Line ~521: Change LinkedIn link

## Step 5: Deploy (1-2 minutes)

### Option A: Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site is live in seconds!

### Option B: Deploy to Netlify

```bash
npm run build
```

Then drag-and-drop the `.next` folder to Netlify.

### Option C: Your Own Server

```bash
npm run build
npm start
```

---

## 📝 Next Steps (After Launch)

1. **Update Experience Section**
   - Edit lines 280-310 in `src/app/page.tsx`
   - Add your actual work history

2. **Add Your Projects**
   - Edit lines 410-450 in `src/app/page.tsx`
   - Add your best 4-5 projects with real links

3. **Update Skills**
   - Edit lines 340-370 in `src/app/page.tsx`
   - List technologies you actually use

4. **Add Your Photo**
   - Save your photo as `public/avatar.jpg`
   - Uncomment image code in hero section

5. **Custom Domain**
   - Purchase domain
   - Point DNS to your hosting
   - Update in `src/app/layout.tsx`

---

## 🎨 Customization Shortcuts

### Change Colors

Edit `tailwind.config.ts`:

```typescript
accent: '#06b6d4',  // Change this to your color
```

### Change Font

Edit `src/app/globals.css`:

```css
font-family: "Your Font", sans-serif;
```

### Add a Section

1. Copy an existing section (like About)
2. Paste it in `src/app/page.tsx`
3. Update the content
4. Add navigation link

---

## 📚 Documentation

- **README.md** - Full setup and deployment guide
- **CUSTOMIZATION.md** - Detailed customization instructions
- **PORTFOLIO-HIGHLIGHTS.md** - What makes it impressive

---

## ✅ Launch Checklist

Before sharing your portfolio publicly:

- [ ] Updated your name and title
- [ ] Updated your email/social links
- [ ] Added your real work experience
- [ ] Added 4-5 of your best projects
- [ ] Updated skills section
- [ ] Tested on mobile phone
- [ ] Tested all links work
- [ ] Deployed to production
- [ ] Added to your email signature
- [ ] Shared on LinkedIn

---

## 🆘 Quick Troubleshooting

**Website doesn't open?**

```bash
npm run dev
# Make sure you see "compiled client and server successfully"
```

**Styles look weird?**

```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Changes not showing?**

- Clear browser cache (Cmd+Shift+Delete)
- Hard refresh (Cmd+Shift+R on Mac)

**Build fails?**

```bash
npm run build
# Read the error message carefully
```

---

## 🚀 You're Ready!

Your professional, impressive portfolio is ready to launch and share with the world.

**Next priorities:**

1. Launch it today
2. Share on LinkedIn within 24 hours
3. Update with real content within this week
4. Continuously improve and add projects

---

## 💬 Questions?

Refer to:

- `README.md` - General questions
- `CUSTOMIZATION.md` - How to customize
- `PORTFOLIO-HIGHLIGHTS.md` - About the technology

---

**Good luck! Your portfolio is going to make an impact.** ✨
