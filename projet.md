# Sujet fil rouge — Application de quiz pédagogique avec Next.js

## Contexte général

Une organisation de formation souhaite disposer d'une **application web de quiz pédagogiques** permettant aux apprenants de tester leurs connaissances après chaque module de cours.
L'application doit être moderne, performante, maintenable et conçue selon les bonnes pratiques de **Next.js (App Router)**.

Le projet est développé de manière incrémentale, en suivant une logique produit.

---

## User story principale (macro)

> **En tant qu'apprenant**,
> je souhaite accéder à une plateforme de quiz en ligne,
> afin de sélectionner un quiz, répondre aux questions, visualiser ma progression et consulter mon score final.

---

## Déclinaison en user stories fonctionnelles (alignées avec les séances)

### US1 — Accéder à l'application et comprendre son objectif (Séances 10–11)

> **En tant qu'utilisateur**,
> je souhaite accéder à une page d'accueil claire et structurée,
> afin de comprendre l'objectif de l'application et naviguer facilement vers les quiz.

**Critères d'acceptation**

* Application initialisée avec Next.js App Router
* Layout global commun à toutes les pages
* Page d'accueil accessible via `/`
* Structure de dossiers claire et évolutive

---

### US2 — Naviguer vers la liste des quiz (Séances 12–13)

> **En tant qu'utilisateur**,
> je souhaite consulter une liste de quiz disponibles,
> afin de choisir celui que je souhaite réaliser.

**Critères d'acceptation**

* Route `/quiz` accessible depuis la navigation
* Liste de quiz affichée (d'abord en dur, puis dynamique)
* Navigation fonctionnelle via `Link`
* Routes dynamiques `/quiz/[id]` préparées

---

### US3 — Charger et afficher les données des quiz (Séances 14–15)

> **En tant qu'utilisateur**,
> je souhaite que les quiz affichent leurs vraies questions et réponses,
> afin de pouvoir réellement passer un quiz.

**Critères d'acceptation**

* Données chargées depuis un fichier JSON local
* Utilisation des Server Components et de `fetch`
* Mise en place d'une base de données MySQL (entités définies)
* Présentation d'une récupération de données persistantes avec TanStack Query
* Page `/quiz/[id]` connectée à ses données

---

### US4 — Répondre à un quiz et suivre sa progression (Séances 16–17)

> **En tant qu'utilisateur**,
> je souhaite répondre aux questions d'un quiz et suivre ma progression,
> afin de connaître mon score final.

**Critères d'acceptation**

* Gestion de l'état global avec Zustand
* Suivi de la question courante
* Calcul du score
* Affichage du résultat final
* Persistance optionnelle via stockage local

---

### US5 — Bénéficier d'une interface claire et moderne (Séances 18–19)

> **En tant qu'utilisateur**,
> je souhaite une interface agréable et cohérente,
> afin de me concentrer sur le contenu du quiz.

**Critères d'acceptation**

* Styling structuré avec Tailwind CSS
* Pages cohérentes visuellement
* Page de quiz finalisée graphiquement
* Route API interne simple (`/api/hello`) consommée dans l'UI
* Page `/history` affichant l'historique des scores

---

### US6 — Présenter une application prête à être déployée (Séance 20)

> **En tant que développeur**,
> je souhaite livrer une application structurée, documentée et déployable,
> afin de démontrer la maîtrise de Next.js et de l'architecture moderne.

**Critères d'acceptation**

* Structure de code claire et justifiée
* Séparation logique des responsabilités
* Utilisation cohérente de Next.js, Zustand, Tailwind et API routes
* Application fonctionnelle et testée manuellement
* Présentation orale argumentée (architecture, choix techniques)

---

## Résumé pédagogique

Ce sujet permet de :

* Construire une **application complète et réaliste**
* Introduire progressivement les concepts clés de Next.js
* Donner du sens aux notions (routing, data fetching, state management, API)
* Aboutir à un livrable défendable en soutenance

Si besoin, ce sujet peut ensuite être décliné en **backlog agile**, **critères d'évaluation** ou **grille de notation**.
