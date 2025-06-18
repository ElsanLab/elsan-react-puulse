# ELSAN REACT PUULSE - Installation dans un projet

### Installation de la dépendance
Pour ajouter le package en dépendance d'un projet ReactJS, ajouter la ligne suivante dans la propriété "dependencies" du fichier package.json :

```"elsan-react-puulse": "git+ssh://git@github.com:ElsanLab/elsan-react-puulse.git#0.0.0"```

ou 

```"elsan-react-puulse": "git+https://github.com/ElsanLab/elsan-react-puulse.git#0.0.0"```

Remplacer 0.0.0 par le numéro de version voulu.
Réinstaller les package avec le package manager du projet.

### Thème
Une fois la dépendance ajoutée et installée dans le projet, il convient de choisir un thème.
Pour cela, il faut importer les fichiers *.css suivant dans le point d'entrer de votre application React (main.jsx, main.tsx, index.jsx, index.tsx,...):

#### Thèmes prédéfinis
- thème PRO:
````
import "elsan-react-puulse/themes/base.css"
import "elsan-react-puulse/themes/pro.css"
````

#### Partage avec TailwindCSS:
En important un thème, les variables du fichier css concerné sont automatiquement disponibles dans votre projet.
Avec tailwindcss, il est donc possible d'utiliser ```bg-[var(--primary)]``` , pour mettre un background de la couleur "primary" du thème, mais ce n'est pas idéal.

Nous fournissons donc un fichier tailwind-config.css qui, une fois importé, permet de copier la configuration du thème choisi dans votre propre installation de TailwindCSS.

Dans votre fichier .css de configuration (généralement index.css), simplement ajouter :

```@import "elsan-react-puulse/themes/tailwind-config.css";```

juste en dessous de 

```@import "tailwindcss";```

Vous pourrez alors utiliser ```bg-primary``` au lieu de ```bg-[var(--primary)]```.

A noter que toutes les couleurs définies dans le fichier elsan-react-puulse/dist/themes/puulse-colors.css sont également disponibles, mais doivent être utilisées comme des variables.

Il est évidemment de rajouter/modifier votre thème "local" TailwindCSS, mais cela n'affectera pas les composants du package elsan-react-puulse.