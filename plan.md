
# Partie Next.js — Plan pédagogique

##  Projet fil rouge

Mini-plateforme de quiz :

* pages simples,
* données mock ou JSON local,
* progression question par question,
* score final,
* gestion d'état globale via Zustand (léger et lisible),
* stockage local optionnel.

---

# Séance 10 — Introduction à Next.js

Objectifs : comprendre App Router et les bases.

Contenu :

* Qu'est-ce que Next.js ?
* Structure `app/`, pages, layouts.
* Server vs Client Components (vision simple).
* Création d'un projet Next.js.
* Exercice : page d'accueil + layout global (header/footer).

---

# Séance 11 — Routing et navigation

Objectifs : savoir créer une navigation basique.

Contenu :

* Routes classiques
* `Link` et navigation
* Premières routes dynamiques
* Exercice : créer `/quiz` + liste de quiz en dur.

---

# Séance 12 — Chargement de données

Objectifs : comprendre le fetch dans un Server Component.

Contenu :

* `fetch()` intégré
* JSON local ou URL simple
* Exercice : la page `/quiz` affiche les quiz depuis un fichier JSON.

---

# Séance 13 — Logique du quiz en local

Objectifs : révisions React (state et événements).

Contenu :

* `useState` (logique locale)
* gestion d'un index de question
* évaluation basique
* Exercice : prototype du quiz dans un composant client.

---

# Séance 14 — Introduction à Zustand (état global)

Objectifs : remplacer le state local par un store partagé.

Contenu :

* Pourquoi un état global ?
* Installation et création d'un store minimaliste (score, question en cours).
* Utilisation du store dans plusieurs composants/pages.
* Exercice : gérer score + progression via Zustand.

---

# Séance 15 — Approfondissement Zustand

Objectifs : aller un peu plus loin, sans complexité.

Contenu :

* Sélecteurs
* Actions propres
* Persistance légère (localStorage)
* Exercice : ajouter une page `/history` affichant les derniers scores.

---

# Séance 16 — Styling avec Tailwind

Objectifs : mettre en forme proprement l'application.

Contenu :

* bases Tailwind
* mise en page de cartes et boutons
* Exercice : styliser la page d'accueil et la page d'un quiz.

---

# Séance 17 — Approfondissement Next.js (rendu hybride)

Objectifs : comprendre mieux SSR/CSR/SSG de manière accessible.

Contenu :

* Situations concrètes où utiliser chaque mode
* Revalidation simple
* Exercice : transformer la liste des quiz en SSG simple.

---

# Séance 18 — Mini-API interne (niveau débutant)

Objectifs : découvrir les API routes sans complexité.

Contenu :

* Route handler GET
* Appeler l'API depuis le client
* Exercice : une route `/api/hello` + affichage d'un message dans l'UI.

---

# Séance 19 — Déploiement et tests manuels

Objectifs : finaliser le projet.

Contenu :

* `next build`
* Déploiement sur Vercel
* Checklist de tests manuels
* Exercice : publier la plateforme.

---

# Séance 20 — Soutenances

Présentation : structure, pages, logique du quiz, store Zustand, déploiement.

---

# Résultat final

Une app Next.js  avec :

* pages propres,
* navigation maîtrisée,
* état global simple via Zustand,
* styling Tailwind,
* mini-API,
* déploiement en production.
