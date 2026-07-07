const express = require("express");

const app = express();

const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Bible Service läuft erfolgreich.");
});

app.listen(PORT, () => {
  console.log(`Bible Service läuft auf Port ${PORT}`);
});