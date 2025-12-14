# Séance — Environnement d'installation & Routing avec Next.js (3h)

## Objectifs pédagogiques

À l'issue de la séance, l'apprenant est capable de :

* Installer un environnement Next.js moderne et fonctionnel
* Comprendre la philosophie du App Router
* Structurer correctement un projet Next.js
* Créer des routes statiques et dynamiques
* Naviguer entre les pages avec `Link`
* Lire une arborescence `app/` et en déduire les routes exposées

---

## Partie 1 — Environnement d'installation 

### 1.1 Pré-requis techniques

* Node.js ≥ 18
* npm ou `pnpm` (pnpm est utilisé pour les monorepo)
* Éditeur de code (VS Code recommandé)
* Terminal

Vérifications :

```bash
node -v
npm -v
```

---

### 1.2 Création du projet Next.js

Commande officielle :

```bash
npx create-next-app@latest quiz-app
```

Options recommandées (expliquées à l'oral) :

* TypeScript : oui **(si vous voulez ce n'est pas une obligation)**
* ESLint : oui
* Tailwind CSS : oui
* App Router : oui
* src/ : oui
* Import alias : oui

---

### 1.3 Lancement du serveur de développement

```bash
cd quiz-app
npm run dev
```

Accès :

```
http://localhost:3000
```

Explication :

* Hot reload
* Compilation automatique
* Différence dev / prod

---

## Partie 2 — Comprendre App Router et la structure `app/` (45 min)

### 2.1 Philosophie du App Router

Principes clés :

* Le dossier `app/` **définit les routes**
* Chaque dossier = un segment d'URL
* Les composants sont **Server Components par défaut**
* Plus besoin de `pages/`

---

### 2.2 Structure initiale analysée

```txt
src/
 └── app/
     ├── layout.tsx
     ├── page.tsx
     └── globals.css
```

Correspondance :

* `/` → `app/page.tsx`
* Layout global → `app/layout.tsx`

---

### 2.3 Rôle de `layout.tsx`

Responsabilités :

* HTML racine
* `<body>`
* Header / footer globaux
* Styles communs

Exemple simplifié :

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>Quiz App</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
```

---

## Pause — 10 min

---

## Partie 3 — Routing statique et navigation (40 min)

### 3.1 Création d'une route statique

Objectif : créer `/quiz`

Arborescence :

```txt
app/
 ├── page.tsx        → /
 └── quiz/
     └── page.tsx    → /quiz
```

Contenu minimal :

```tsx
export default function QuizPage() {
  return <h1>Liste des quiz</h1>;
}
```

---

### 3.2 Navigation avec `Link`

Import :

```tsx
import Link from "next/link";
```

Exemple depuis la page d'accueil :

```tsx
<Link href="/quiz">Accéder aux quiz</Link>
```

Bonnes pratiques :

* Toujours utiliser `Link`
* Pas de `<a href="">` pour la navigation interne

---

### 3.3 Navigation layoutée

Rappel :

* Un layout englobe automatiquement toutes les routes enfants

Exemple :

```txt
app/
 ├── layout.tsx
 ├── page.tsx
 └── quiz/
     └── page.tsx
```

Le layout est partagé entre `/` et `/quiz`.

---

## Partie 4 — Routing dynamique (30 min)

### 4.1 Principe des routes dynamiques

Syntaxe :

```txt
[segment]
```

Objectif : `/quiz/1`, `/quiz/42`, etc.

---

### 4.2 Mise en place de `/quiz/[id]`

Arborescence :

```txt
app/
 └── quiz/
     ├── page.tsx
     └── [id]/
         └── page.tsx
```

---

### 4.3 Récupération du paramètre

```tsx
type Props = {
  params: {
    id: string;
  };
};

export default function QuizDetailPage({ params }: Props) {
  return <h1>Quiz {params.id}</h1>;
}
```

Points importants :

* `params` est injecté automatiquement
* Typage explicite recommandé
* Compatible Server Components

---

## Partie 5 — Mise en pratique guidée (30 min)

### Exercice 1 — Structure

* Créer les routes :

  * `/`
  * `/quiz`
  * `/quiz/[id]`

---

### Exercice 2 — Navigation

* Ajouter un lien depuis `/` vers `/quiz`
* Ajouter un lien depuis `/quiz` vers `/quiz/1`

---

### Exercice 3 — Vérification

* Vérifier que chaque URL fonctionne
* Observer la structure `app/` et faire le lien avec l'URL

---


## En autonomie 

### Travail à réaliser pour la suite (aligné avec les user stories)

#### Objectif

Préparer l’application pour la **sélection réelle d’un quiz**, en cohérence avec la user story « consulter et choisir un quiz ».

---

### À réaliser

> **En tant qu’utilisateur**,
> je souhaite voir une liste de quiz cliquables,
> afin de pouvoir accéder à la page détaillée de chaque quiz.

---

### Tâche demandée

1. **Créer une liste de quiz “en dur”**

   * Dans la page `/quiz`
   * Tableau JavaScript simple (id, titre, description courte)

2. **Afficher la liste dans l’interface**

   * Un bloc par quiz
   * Titre visible
   * Lien cliquable vers `/quiz/[id]`

3. **Rendre la navigation fonctionnelle**

   * Utilisation exclusive de `Link`
   * Chaque quiz mène à sa page dynamique correspondante

4. **Adapter la page `/quiz/[id]`**

   * Afficher dynamiquement l’ID du quiz
   * Afficher un titre cohérent (“Quiz : …”)

---

### Critères de validation

* `/quiz` affiche plusieurs quiz distincts
* Chaque quiz est accessible via une URL différente (`/quiz/1`, `/quiz/2`, …)
* La structure `app/` reflète clairement les routes
* Aucun fetch, aucune base de données (logique locale uniquement)

---

