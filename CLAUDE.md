# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the landing page website for **Anatomie UNIL**, an iOS educational app for learning muscle anatomy. The site is a single-page application built with Next.js 15 and deployed on Vercel.

**App Store Link:** https://apps.apple.com/ch/app/anatomie-unil/id1222411841

## Repository Structure

The project is organized with the Next.js application in a subdirectory:

```
Anatomie_UNIL_Website/
└── landing-page/          # Next.js 15 application (work in this directory)
    ├── app/               # Next.js App Router
    │   ├── layout.tsx     # Root layout with metadata
    │   ├── page.tsx       # Homepage (main landing page)
    │   ├── globals.css    # Tailwind CSS import
    │   └── privacy/       # Privacy policy page
    │       └── page.tsx
    └── public/
        └── screenshots/   # iOS app screenshots (5 PNG files)
```

**Important:** All development work happens in the `landing-page/` directory. Always `cd landing-page` before running commands.

## Development Commands

All commands must be run from the `landing-page/` directory:

```bash
# Install dependencies
npm install

# Start development server at http://localhost:3000
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Lint the code
npm run lint
```

## Architecture

### Next.js 15 App Router

The project uses Next.js 15 with the App Router pattern (not Pages Router):
- `app/layout.tsx`: Root layout defining HTML structure and metadata
- `app/page.tsx`: Main landing page component (single page design)
- `app/privacy/page.tsx`: Privacy policy page

### Styling

- **Tailwind CSS v4.1.14** with PostCSS
- Custom colors defined in `tailwind.config.ts`:
  - `primary`: #007AFF (iOS blue)
  - `secondary`: #5856D6 (iOS purple)
- Gradient backgrounds: `from-blue-600 via-purple-600 to-blue-700`
- French locale (`lang="fr"`)

### Image Handling

Next.js Image component is configured with `unoptimized: true` in `next.config.ts`. Screenshots are loaded from `/public/screenshots/`:
- QuizzMenu.png
- QuizzItems.png
- Results.png
- CorrectAnswer.png
- WrongAnswer.png

### Landing Page Structure

The main page (`app/page.tsx`) contains these sections in order:
1. **Hero Section**: Gradient background with app title, description, and App Store download button
2. **Features Section**: 4-column grid showcasing app features (Quiz interactifs, 3 Catégories, Suivi des progrès, 4 Types de questions)
3. **Screenshots Section**: 3-column gallery of app screenshots with captions
4. **CTA Section**: Call-to-action with App Store button
5. **Footer**: Copyright and privacy policy link

### Metadata & SEO

Defined in `app/layout.tsx`:
- Title: "Anatomie UNIL - Quiz d'anatomie musculaire"
- Description: Educational muscle anatomy quiz app
- Language: French (`fr`)

## Deployment

The site is deployed on **Vercel**. Any push to the `master` branch triggers automatic production deployment.

For manual deployment via CLI:
```bash
vercel          # Deploy to preview
vercel --prod   # Deploy to production
```

## Content Notes

- All content is in **French** (fr-CH locale)
- The app is for learning muscle anatomy with quiz questions covering:
  - Origin (Origine)
  - Termination (Terminaison)
  - Innervation (Innervation)
  - Vascularization (Vascularisation)
- Three muscle categories: Upper limb, lower limb, trunk
- Privacy policy emphasizes **no data collection** - all data stored locally on user's iOS device
