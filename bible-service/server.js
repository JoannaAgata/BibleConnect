const express = require("express");

const app = express();

const PORT = 3002;

// Startseite des Services
app.get("/", (req, res) => {
  res.send("Bible Service läuft erfolgreich.");
});

// Beispiel-Endpunkt für einen Bibelvers
app.get("/verse", (req, res) => {
  res.json({
    reference: "Matthäus 18,20",
    text: "Denn wo zwei oder drei in meinem Namen versammelt sind, da bin ich mitten unter ihnen."
  });
});

app.listen(PORT, () => {
  console.log(`Bible Service läuft auf Port ${PORT}`);
});