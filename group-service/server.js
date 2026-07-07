const express = require("express");

const app = express();

const PORT = 3003;

// Startseite des Services
app.get("/", (req, res) => {
  res.send("Group Service läuft erfolgreich.");
});

// Beispiel-Endpunkt für Gruppen
app.get("/groups", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Jugendkreis"
    },
    {
      id: 2,
      name: "Bibelkreis Berlin"
    },
    {
      id: 3,
      name: "Gebetsgruppe"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Group Service läuft auf Port ${PORT}`);
});