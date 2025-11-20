<<<<<<< HEAD
# test_portfolio
=======
# Renan Lavirotte - Interactive Portfolio Website

> Building Technology That Saves Lives

A modern, interactive portfolio website showcasing work in Artificial Heart R&D, VR/AI Development, Robotics, and Full-Stack Engineering.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

### Installation & Running

**Step 1: Install Dependencies**
```bash
npm install
```

**Step 2: Run Development Server**
```bash
npm run dev
```

**Step 3: Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Common Issues & Solutions

#### ❌ Issue: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json if they exist
rm -rf node_modules package-lock.json

# Try install again
npm install
```

#### ❌ Issue: Port 3000 is already in use
**Solution:**
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or run on a different port
npm run dev -- -p 3001
```

#### ❌ Issue: React hydration errors or warnings
**Solution:**
- These are usually safe to ignore during development
- Make sure you're using the latest versions of dependencies
- Clear browser cache and hard refresh (Ctrl + Shift + R)

#### ❌ Issue: TypeScript errors
**Solution:**
```bash
# Run type checking
npx tsc --noEmit

# Usually auto-fixed in development mode
```

## 📁 Project Structure

```
second_portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   ├── ui/               # Reusable UI components
│   └── animations/       # Animation components
├── data/                  # Static data (projects, skills, timeline)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets (images, CV, etc.)
│   └── Images/           # Your images folder
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── package.json          # Dependencies
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js + React Three Fiber
- **Icons:** Lucide React
- **Markdown:** React Markdown

## 📸 Adding Your Images

Place your images in the `Images/` folder. When you add images:
1. Create a `what_is_it.txt` file in the Images folder
2. Describe what each image is for
3. The images will be integrated into the appropriate sections

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free)

**1. Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

**2. Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Sign in with GitHub
- Click "Import Project"
- Select your repository
- Click "Deploy"

Your site will be live in ~2 minutes!

### Environment Variables (if needed)
Create a `.env.local` file for sensitive data:
```env
# Contact form service
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Fonts
Fonts are configured in `app/layout.tsx` using Google Fonts (Geist).

### Content
Edit files in the `data/` folder to update:
- Projects
- Skills
- Timeline events
- Leadership experiences

## 📝 Development Notes

### Dark Mode
Dark mode is implemented using Tailwind's `dark:` class prefix. Toggle functionality will be added in the navigation component.

### Performance
- Images are automatically optimized by Next.js
- Code splitting happens automatically
- All animations use GPU-accelerated transforms

### Accessibility
- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## 🐛 Troubleshooting

If you encounter any issues:

1. **Check Node.js version:**
   ```bash
   node --version  # Should be 18.17+
   ```

2. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Verify all files are present:**
   - package.json
   - next.config.mjs
   - tailwind.config.ts
   - tsconfig.json

4. **Check for syntax errors:**
   ```bash
   npm run lint
   ```

## 📧 Need Help?

If you run into issues:
1. Check the error message carefully
2. Search for the error on Google/Stack Overflow
3. Make sure all dependencies installed correctly
4. Verify Node.js version is compatible

## 📜 License

© 2025 Renan Lavirotte. All rights reserved.

---

**Built with ❤️ and lots of coffee**
>>>>>>> ede577b (initiation)
