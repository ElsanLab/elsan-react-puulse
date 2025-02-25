# ELSAN REACT PUULSE

### Installation
Le projet utilise **pnpm** comme packager, à cause d'une incompatibilité entre Yarn et certaines parties de Storybook.

#### Installation des dépendances:
```
pnpm install
```

#### installation d'une dépendance
```
pnpm add [nom du package]
```
ou
```
pnpm add -D [nom du package]
```

#### lancement de storybook
```
pnpm storybook
```

### Build
Lors de la première installation, exécuter la commande pour autoriser l'exécution du fichier build.sh. 
``` 
chmod +x build.sh 
```

Pour exécuter le build du package, exécuter simplement
```
pnpm build
```

Le dossier dist sera recréé avec les fichiers compilés.