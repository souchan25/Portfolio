# Portfolio - Eugene D. Pausa

A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark, aesthetic theme with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development experience

## 📋 Sections

- **Hero**: Introduction with social links
- **About**: Personal information and background
- **Skills**: Technical skills with animated progress bars
- **Projects**: Showcase of portfolio projects
- **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push changes to the `main` branch to trigger automatic deployment
4. Your site will be available at `https://[username].github.io/Portfolio/`

The deployment workflow (`.github/workflows/nextjs.yml`) automatically:
- Builds the Next.js static site
- Optimizes assets
- Deploys to GitHub Pages

### Manual Deployment

If you need to trigger a deployment manually:
1. Go to the "Actions" tab in your repository
2. Select "Deploy Next.js site to Pages"
3. Click "Run workflow"

## 📝 Customization

Update the following files to customize your portfolio:

- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section content
- `components/Skills.tsx` - Skills and proficiency levels
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information

## 📄 License

This project is open source and available under the MIT License.
