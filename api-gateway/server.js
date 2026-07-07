const express = require("express");

const app = express();

const PORT = 3000;

// Startseite
app.get("/", (req, res) => {
  res.send("BibleConnect API Gateway läuft erfolgreich.");
});

// Benutzer
app.get("/users", (req, res) => {
  res.json({
    service: "User Service",
    message: "Anfrage würde an den User Service weitergeleitet."
  });
});

// Bibelverse
app.get("/verse", (req, res) => {
  res.json({
    service: "Bible Service",
    message: "Anfrage würde an den Bible Service weitergeleitet."
  });
});

// Gruppen
app.get("/groups", (req, res) => {
  res.json({
    service: "Group Service",
    message: "Anfrage würde an den Group Service weitergeleitet."
  });
});

// Kommentare
app.get("/comments", (req, res) => {
  res.json({
    service: "Comment Service",
    message: "Anfrage würde an den Comment Service weitergeleitet."
  });
});

// Benachrichtigungen
app.get("/notifications", (req, res) => {
  res.json({
    service: "Notification Service",
    message: "Anfrage würde an den Notification Service weitergeleitet."
  });
});

app.listen(PORT, () => {
  console.log(`API Gateway läuft auf Port ${PORT}`);
});