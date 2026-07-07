const express = require("express");

const app = express();

const PORT = 3004;

// Startseite
app.get("/", (req, res) => {
  res.send("Comment Service läuft erfolgreich.");
});

// Beispiel-Kommentare
app.get("/comments", (req, res) => {
  res.json([
    {
      id: 1,
      user: "Joanna",
      verse: "Matthäus 18,20",
      comment: "Dieser Vers erinnert mich daran, dass Gemeinschaft im Glauben wichtig ist."
    },
    {
      id: 2,
      user: "Max",
      verse: "Psalm 23,1",
      comment: "Dieser Psalm gibt mir Hoffnung."
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Comment Service läuft auf Port ${PORT}`);
});