# ELSAN REACT PUULSE - Installation dans un projet

### Installation de la dépendance
Pour ajouter le package en dépendance d'un projet ReactJS, ajouter la ligne suivante dans la propriété "dependencies" du fichier package.json :

    "elsan-react-puulse": "git+ssh://git@github.com:ElsanLab/elsan-react-puulse.git#0.0.0",

    ou 

    "elsan-react-puulse": "git+https://github.com/ElsanLab/elsan-react-puulse.git#0.0.0"

Remplacer 0.0.0 par le numéro de version voulu.
Réinstaller les package avec le package manager du projet.

### Considérations CI/CD
Étant dans un repo privé, l'installation du projet nécessite une authentification.
Il est recommandé de **privilégier l'installation en SSH**, qui permet à la fois aux développeurs d'installer les dépendances en utilisant leur compte GitHub, ET aux serveurs/CI-CD d'utiliser une clé SSH enregistrée dans les Deploy Keys du projet elsan-react-puulse.

> Nos déploiments se faisant via des GitHub Actions, ces dernières doivent **transmettre la clé SSH autorisée dans les Deploy Keys**