# FlowerPot

FlowerPot est une application mobile développée dans le cadre d'un projet d'étude permettant aux utilisateurs de gérer des pots de fleurs connectés. L'application offre la possibilité d'ajouter et de supprimer des pots de fleurs, de visualiser des graphiques basés sur les données fournies par ces derniers, ainsi que de prendre en photo une plante et de la reconnaître grâce à l'apprentissage automatique.

## Fonctionnalités clés

- Ajouter un pot de fleur : Les utilisateurs peuvent ajouter de nouveaux pots de fleurs en renseignant des informations.
- Supprimer un pot de fleur : Les utilisateurs peuvent supprimer des pots de fleurs existants de leur liste.
- Suivi des données : Les pots de fleurs connectés fournissent des données sur des paramètres tels que l'humidité du sol, la température, et l'exposition à la lumière. L'application collecte ces données et les affiche sous forme de graphiques.
- Prise de photo et reconnaissance de plante : Les utilisateurs peuvent prendre une photo d'une plante, et l'application utilise l'apprentissage automatique pour tenter de reconnaître la plante à partir de la photo.
- Visualisation des graphiques : Les utilisateurs peuvent visualiser les données collectées par les pots de fleurs sous forme de graphiques, permettant de suivre l'évolution des paramètres au fil du temps.

## Installation

1. Clonez le dépôt FlowerPot depuis GitHub :
``` 
git clone https://github.com/votre-utilisateur/flowerpot.git 
```

2. Assurez-vous d'avoir [Node.js](https://nodejs.org) et  [React native](https://reactnative.dev/docs/environment-setup) installé.

3. Installez les dépendances du projet en exécutant la commande suivante dans le répertoire racine du projet :

```
npm install
```

4. Lancez l'application en exécutant la commande suivante :

```
npm run android
```

## Configuration

La configuration de l'application se trouve dans le dossier `src/config`. Vous pouvez y spécifier les paramètres url de connexion à votre [API Flower](https://github.com/BaptisteAngot/FlowerPotAPI) et à [API ML Flower](https://github.com/BaptisteAngot/MLFlower)