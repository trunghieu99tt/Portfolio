# Nguyen Trung Hieu (Elliot) - Portfolio

This is a personal portfolio website showcasing my work, skills, and experiences as a Software Engineer.

## Tech Stack

This project has been migrated from Create React App to **Next.js 14** with the following technologies:

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **SCSS/Sass** - Styling with preprocessor
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Bootstrap 5** - UI framework
- **React Slick** - Carousel components
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Rikikudo.git
cd Rikikudo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
FIREBASE_DATABASEURL=your_firebase_database_url_here
MY_CV_URL=your_cv_url_here
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
.
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── src/
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── layout/          # Layout components
│   ├── sass/            # SCSS styles
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── data/            # Static data
│   └── talons/          # Custom hooks for data fetching
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Migration from CRA to Next.js

This project was originally built with Create React App and has been successfully migrated to Next.js 14. Key changes include:

- Migrated to Next.js App Router architecture
- Updated all components with 'use client' directive where needed
- Migrated environment variables to `` prefix
- Updated image imports to use Next.js Image optimization where applicable
- Migrated from `react-particles-js` patterns to modern alternatives
- Updated Framer Motion APIs to latest versions

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Docker

You can also run this application using Docker:

```bash
docker build -t rikikudo-portfolio .
docker run -p 3000:3000 rikikudo-portfolio
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@Rikikudo](https://github.com/Rikikudo)
- Facebook: [Rikikudo99](https://www.facebook.com/rikikudo99)
