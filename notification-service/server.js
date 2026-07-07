const express = require("express");

const app = express();

const PORT = 3005;

// Startseite des Services
app.get("/", (req, res) => {
  res.send("Notification Service läuft erfolgreich.");
});

// Beispiel-Endpunkt für Benachrichtigungen
app.get("/notifications", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Neue Gruppeneinladung",
      message: "Du wurdest zur Gruppe 'Jugendkreis' eingeladen."
    },
    {
      id: 2,
      title: "Neuer Kommentar",
      message: "Max hat deinen Kommentar beantwortet."
    },
    {
      id: 3,
      title: "Vers des Tages",
      message: "Heute wurde ein neuer Vers des Tages veröffentlicht."
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Notification Service läuft auf Port ${PORT}`);
});