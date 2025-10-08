# Quick Start Guide

Get your portfolio running in 5 minutes!

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```
or
```bash
yarn install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_DATABASEURL=https://your-firebase-project.firebaseio.com/
NEXT_PUBLIC_MY_CV_URL=https://your-cv-url.com/cv.pdf
```

> **Note:** If you don't have a Firebase database, you can skip this for now. The site will work but won't load dynamic data.

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## Common Issues

### Issue: "Cannot find module 'next'"
**Solution:** Run `npm install` to install all dependencies.

### Issue: Build errors with SCSS
**Solution:** Ensure `sass` is installed: `npm install sass`

### Issue: Environment variables not working
**Solution:** 
1. Ensure your `.env.local` file is in the root directory
2. Restart the development server after creating/editing `.env.local`
3. Make sure variables start with `NEXT_PUBLIC_`

### Issue: Images not loading
**Solution:** Check that images exist in `src/images/` directory

## Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Next Steps

1. **Customize Content:** Edit `app/page.tsx` and components in `src/components/`
2. **Update Styles:** Modify SCSS files in `src/sass/`
3. **Add Your Projects:** Update data in `src/data/myproject.data.js`
4. **Deploy:** Use Vercel, Netlify, or Docker (see README.md)

## Need Help?

- Check [MIGRATION_NOTES.md](./MIGRATION_NOTES.md) for detailed changes
- Read [README.md](./README.md) for full documentation
- Visit [Next.js Documentation](https://nextjs.org/docs)

Happy coding! 🚀

