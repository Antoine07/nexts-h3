---
marp: true
theme: default
paginate: true
class: lead
---

## Installation de Next.js - rapidement

### 1. Prérequis indispensables

Avant toute chose, vérifier que **Node.js est installé**.

1. Version recommandée : **Node.js 18 ou plus**
1. Vérification dans le terminal :

```bash
node -v
npm -v
```

Si Node n'est pas installé ou trop ancien, il faut le mettre à jour avant de continuer.

---

###  Création d'un projet Next.js

La création du projet se fait avec la commande officielle :

```bash
npx create-next-app@latest quiz-app
```

Cette commande :

1. télécharge les outils nécessaires,
1. initialise un projet prêt à l'emploi,
1. configure automatiquement l'environnement.

---

### Options à sélectionner 

Lors des questions interactives, choisir :

* TypeScript : **oui** - plus sécurisant
* ESLint : **oui** - bonne pratique pour le code
* Tailwind CSS : **oui** - framework css
* App Router : **oui** - le routing en place
* Dossier `src/` : **oui** - classique 
* Alias d'import (`@/`) : **oui** - plus facile

Ces choix correspondent aux bonnes pratiques actuelles et au cadre du projet fil rouge.

---

### Lancer le serveur de développement

Se placer dans le dossier du projet puis lancer (hot reload pour le développement)

```bash
cd quiz-app
npm run dev
```

Le projet est alors accessible à l'adresse :

```
http://localhost:3000
```

---

###  Ce qu'il faut comprendre immédiatement

1. Le serveur se recharge automatiquement à chaque modification
1. **Les routes sont définies** par les fichiers dans `app/`
1. `app/page.tsx` correspond à la page `/` - la page racine, classiquement `home`
1. `app/layout.tsx` correspond au layout global (modèle pour d'autres pages).

*Aucune configuration manuelle du routing n'est nécessaire.*
