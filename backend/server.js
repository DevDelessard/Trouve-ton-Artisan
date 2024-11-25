const express = require('express');
const cors = require('cors'); // Importer cors
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware pour CORS
app.use(cors()); // Autorise toutes les origines
// Vous pouvez restreindre l'origine en spécifiant l'URL du frontend :
// app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware pour traiter les données JSON
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    secure: false,
  });

  const mailOptions = {
    from: `"Trouve Ton Artisan" <no-reply@trouvetonartisan.com>`,
    to: 'client@example.com',
    subject: `Message de ${name} - ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email envoyé avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).send('Erreur lors de l\'envoi de l\'email.');
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
