# Anatomie UNIL Website

Landing page officielle pour l'application iOS **Anatomie UNIL**, une application éducative développée pour l'Université de Lausanne (UNIL) destinée à l'apprentissage de l'anatomie musculaire.

## À propos

Ce projet héberge la landing page web de l'application mobile Anatomie UNIL, permettant aux visiteurs de découvrir les fonctionnalités de l'application et de la télécharger depuis l'App Store.

**Lien App Store:** [Télécharger Anatomie UNIL](https://apps.apple.com/ch/app/anatomie-unil/id1222411841)

## Fonctionnalités de l'application

- **Quiz interactifs** : Questions à choix multiples sur l'anatomie musculaire
- **3 Catégories** : Membre supérieur, membre inférieur et tronc
- **4 Types de questions** : Origine, terminaison, innervation et vascularisation des muscles
- **Suivi des progrès** : Historique et statistiques détaillées de vos quiz

## Structure du projet

```
Anatomie_UNIL_Website/
└── landing-page/          # Application Next.js
    ├── app/               # Pages et composants Next.js 15
    │   ├── layout.tsx     # Layout principal
    │   ├── page.tsx       # Page d'accueil
    │   ├── globals.css    # Styles globaux
    │   └── privacy/       # Page de confidentialité
    ├── public/
    │   └── screenshots/   # Captures d'écran de l'app
    ├── next.config.ts
    ├── tailwind.config.ts
    └── package.json
```

## Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Vercel** - Plateforme d'hébergement et déploiement

## Développement

Pour lancer le projet en local, consultez le [README du landing-page](./landing-page/README.md) qui contient toutes les instructions détaillées.

### Démarrage rapide

```bash
cd landing-page
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir la landing page.

## Sections de la landing page

1. **Hero** - Présentation de l'application avec lien App Store
2. **Fonctionnalités** - 4 features principales de l'application
3. **Screenshots** - Galerie de captures d'écran de l'interface
4. **CTA** - Call-to-action pour télécharger l'application
5. **Footer** - Informations et lien vers la politique de confidentialité

## Déploiement

Le site est déployé sur Vercel. Toute modification poussée sur la branche `master` déclenche automatiquement un déploiement en production.

## Licence

© 2025 Anatomie UNIL. Tous droits réservés.

## Contact

Pour plus d'informations sur l'application ou le projet, veuillez contacter l'Université de Lausanne (UNIL).
