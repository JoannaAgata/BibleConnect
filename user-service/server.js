const express = require("express");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("User Service läuft erfolgreich.");
});

app.listen(PORT, () => {
  console.log(`User Service läuft auf Port ${PORT}`);
});