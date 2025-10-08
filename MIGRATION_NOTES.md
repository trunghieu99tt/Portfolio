# Migration Notes: Create React App to Next.js 14

This document outlines the migration from Create React App (CRA) to Next.js 14.

## Major Changes

### 1. Project Structure
- Created `app/` directory for Next.js App Router
- Moved main application logic from `src/App.tsx` to `app/page.tsx`
- Created `app/layout.tsx` for root layout and metadata
- Kept `src/` directory for components, hooks, and utilities

### 2. Component Updates
All client-side components now include `'use client'` directive:
- Components using hooks (useState, useEffect, etc.)
- Components accessing browser APIs (window, document)
- Components using Framer Motion animations
- Interactive components

### 3. Dependencies Updated
- Upgraded React to v18.2.0
- Upgraded TypeScript to v5.3.3
- Updated Framer Motion to v10 (API changes)
  - `useViewportScroll` → `useScroll`
  - `AnimateSharedLayout` → `LayoutGroup`
  - `scrollYProgress.onChange()` → `scrollYProgress.on('change')`
- Updated GSAP (TweenMax → gsap)
- Removed `react-scripts` (CRA)
- Added Next.js 14

### 4. Environment Variables
All environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser:
- `REACT_APP_FIREBASE_DATABASEURL` → `NEXT_PUBLIC_FIREBASE_DATABASEURL`
- `REACT_APP_MY_CV_URL` → `NEXT_PUBLIC_MY_CV_URL`

Create a `.env.local` file with your environment variables (see `.env.example`).

### 5. Image Handling
Updated image imports in key components:
- Navigation: Uses Next.js `Image` component
- Footer: Uses Next.js `Image` component
- Banner: Uses Next.js `Image` component
- AboutMe: Uses Next.js `Image` component

Note: Some components still use regular `<img>` tags where dynamic URLs are used.

### 6. External Scripts
Migrated scripts from `public/index.html` to `app/layout.tsx` using Next.js `Script` component:
- FontAwesome
- jQuery
- Parallax.js
- LazySize
- Isotope Layout
- Splitbee Analytics

### 7. Routing
- Next.js uses file-based routing in the `app/` directory
- This is currently a single-page application
- To add new pages, create new directories in `app/` with `page.tsx` files

### 8. Deleted Files
Removed Create React App specific files:
- `src/App.tsx` (replaced by `app/page.tsx`)
- `src/index.js` (Next.js handles entry point)
- `src/index.css` (replaced by `app/globals.css`)
- `src/App.css`
- `src/App.test.js`
- `src/setupTests.js`
- `src/serviceWorker.js`
- `src/logo.svg`
- `src/react-app-env.d.ts` (Next.js provides its own)
- `public/index.html` (Next.js generates HTML)

## Known Issues and Considerations

### 1. React Particles
The original `react-particles-js` package is outdated. Consider migrating to:
- `@tsparticles/react` with `@tsparticles/slim` (already in package.json)
- Or removing particle effects if not critical

### 2. React ID Swiper
The `react-id-swiper` package is outdated. It still works but consider migrating to:
- `swiper/react` (Swiper's official React components)
- Native Swiper v11 (already in dependencies)

### 3. Isotope Layout
Still using jQuery-based Isotope in `MyProjects.jsx`. This works but could be modernized.

### 4. Image Optimization
Not all images are using Next.js Image component yet. Consider:
- Converting more `<img>` tags to `<Image>` components
- Using the `next/image` loader for better performance
- Optimizing the custom Image component in `src/components/Image/`

### 5. SSR Considerations
Currently, most components are client-side rendered. Future optimizations could include:
- Moving static content to Server Components
- Implementing proper data fetching with Next.js patterns
- Using Server Actions for form submissions

## Testing After Migration

1. **Development Mode**
   ```bash
   npm run dev
   ```
   - Test all pages and sections
   - Check browser console for errors
   - Verify animations work correctly

2. **Production Build**
   ```bash
   npm run build
   npm start
   ```
   - Ensure no build errors
   - Check bundle size
   - Test performance

3. **Environment Variables**
   - Verify Firebase connection works
   - Test CV download link

4. **Responsive Design**
   - Test mobile navigation
   - Check tablet breakpoints
   - Verify desktop layout

## Future Improvements

1. **Performance**
   - Implement proper image optimization with Next.js Image
   - Code splitting optimization
   - Font optimization

2. **SEO**
   - Add proper meta tags for each section
   - Implement structured data
   - Create sitemap

3. **Modern Dependencies**
   - Replace outdated packages (react-id-swiper, react-particles-js)
   - Remove jQuery dependency
   - Modernize Isotope usage

4. **TypeScript**
   - Add proper types to all components
   - Remove `any` types
   - Improve type safety

5. **Testing**
   - Set up Jest with Next.js
   - Add component tests
   - Implement E2E tests with Playwright

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t rikikudo-portfolio .
docker run -p 3000:3000 rikikudo-portfolio
```

### Other Platforms
- Netlify: Supported with adapter
- AWS Amplify: Supported
- Self-hosted: Use Docker or Node.js server

## Support

If you encounter issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Review this migration guide
3. Check browser console for errors
4. Verify environment variables are set correctly

