# MacLesggy
# Station Météo Connectée - Projet Atmos

## Présentation du Projet

La Station Météo Connectée est un projet visant à moderniser les stations météorologiques de la startup "Atmos", récemment acquise par la société "Lepetit". Le prototype combine à la fois une application web pour la visualisation des données météo en temps réel et un matériel électronique pour la collecte des données.

## Fonctionnalités

- **Inscription Utilisateur :** Les utilisateurs peuvent créer un compte sur le site.
- **Visualisation des Données :** Affichage en temps réel des valeurs d'humidité, de chaleur et de pression sous forme de graphiques et de valeurs directes.
- **Historique :** Un historique avec la moyenne des températures des 7 derniers jours.

## Installation

1. **MariaDB :** Installer MariaDB sur le Raspberry Pi.
2. **Hébergement des Fichiers :** Copier les fichiers du site sur le Raspberry Pi.
3. **Serveur Web :** Installer un serveur web Apache sur le Raspberry Pi.
4. **Connexion au WiFi :** Connecter le Raspberry Pi au réseau WiFi.

## Technologies Utilisées

- Capteur de pression SEN0236
- Rasbery pi 4
- FastAPI pour la gestion de l'API.
- MariaDB pour la base de données.
- Apache comme serveur web.

## Licence

Ce projet est sous licence Apache 2.0 - voir le fichier [LICENSE](LICENSE) pour plus de détails.
