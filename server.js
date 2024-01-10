const express = require('express');
const app = express();

// Route pour se connecter à la base de données
app.get('/connecter-bdd', function(req, res) {
    // Code pour établir la connexion à la base de données MariaDB
    // Exécutez vos requêtes ici
    
    // Exemple de réponse au client côté serveur
    res.send('Connexion à la base de données établie');
});

// Démarrez le serveur
const port = 3000; // Port du serveur
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
