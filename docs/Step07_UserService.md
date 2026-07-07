# Step 07 – Entwicklung des User Service

## Ziel

Ziel dieses Entwicklungsschrittes war die Erstellung des ersten eigenständigen Services der verteilten Anwendung BibleConnect. Der User Service bildet die Grundlage für die spätere Benutzerverwaltung und zeigt das Prinzip einer verteilten Softwarearchitektur.

## Durchgeführte Arbeiten

- Eigenen Ordner `user-service` eingerichtet.
- Node.js-Projekt mit `npm init` erstellt.
- Express installiert.
- Datei `server.js` erstellt.
- HTTP-Endpunkt `/` implementiert.
- Service auf Port **3001** gestartet und getestet.

## Ergebnis

Der User Service läuft unabhängig vom Frontend als eigener Prozess auf Port **3001**. Damit wurde der erste Baustein der verteilten Architektur erfolgreich umgesetzt.

### Abbildung 1: Laufender User Service

![User Service](Screenshots/step07_user_service.png)
