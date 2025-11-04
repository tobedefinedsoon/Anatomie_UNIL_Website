# Anatomie UNIL - Landing Page

Landing page pour l'application iOS **Anatomie UNIL**, une application éducative pour l'apprentissage de l'anatomie musculaire.

## 🚀 Développement local

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install
```

### Lancer en local

```bash
# Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir la landing page.

### Build de production

```bash
# Créer le build de production
npm run build

# Démarrer le serveur de production
npm start
```

## 📦 Déploiement sur Vercel

### Méthode 1 : Via GitHub (Recommandé)

1. Pushez le code sur GitHub
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Cliquez sur "New Project"
4. Importez votre repository GitHub
5. Vercel détectera automatiquement Next.js et configurera le build
6. Cliquez sur "Deploy"

### Méthode 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

## 🏗️ Structure du projet

```
landing-page/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── public/
│   └── screenshots/        # Screenshots de l'app
│       ├── QuizzMenu.png
│       ├── QuizzItems.png
│       ├── Results.png
│       ├── CorrectAnswer.png
│       └── WrongAnswer.png
├── next.config.ts          # Configuration Next.js
├── tailwind.config.ts      # Configuration Tailwind CSS
└── package.json
```

## 🎨 Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Vercel** - Hébergement et déploiement

## 📝 Sections de la landing page

1. **Hero** - Titre, description et bouton App Store
2. **Fonctionnalités** - 4 features principales de l'app
3. **Screenshots** - Galerie de captures d'écran
4. **CTA** - Call-to-action final
5. **Footer** - Informations de base

## 🔗 Liens

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Vercel](https://vercel.com/docs)
