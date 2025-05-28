# ELSAN REACT PUULSE

### Installation pour dev
Le projet utilise **PNPM** comme packager, à cause d'une incompatibilité entre Yarn et certaines parties de Storybook.

#### > Installation des dépendances:

```
pnpm install
```

#### > installation d'une dépendance

```
pnpm add [nom du package]
```
ou
```
pnpm add -D [nom du package]
```

#### > lancement de storybook

```
pnpm storybook
```

### Build

Les fichiers de build ne sont pas inclus dans le package.
Il n'est pas utile d'exécuter la commande manuellement: le build est automatique lors de la création d'une release via la GitHub Action dédiée.

Il est cenepdant possible de le faire, en exécutant simplement
```
pnpm build
```
Le dossier dist sera recréé avec les fichiers compilés.

#### > test de l'import du package

Il est possible de tester le comportement du package lorsqu'importé par un projet, sans créer de release.
On passe par un utilitaire générant un pseudo répo local: Yalc: https://github.com/wclr/yalc (cf doc pour installation).

Générer la fausse release de test
```
pnpm build && pnpm dlx yalc publish
```

Ensuite, dans un projet de test, installer la release en tant que dépendance:
```
npx yalc add elsan-react-puulse
```
ou mettre à jour avec la dernière release créée
```
npx yalc update elsan-react-puulse
```

### Installation dans un projet
Pour ajouter le package en dépendance d'un projet ReactJS, ajouter la ligne suivante dans la propriété "dependencies" du fichier package.json :

    "elsan-react-puulse": "git+ssh://git@github.com:ElsanLab/elsan-react-puulse.git#0.0.0",

Remplacer 0.0.0 par le numéro de version voulu.
Réinstaller les package avec le package manager du projet.

> Étant dans un repo privé, le projet s'installe en SSH.
> Nos déploiments se faisant via des GitHub Actions, ces dernières doivent transmettre la clé SSH autorisée dans les Deploy Keys