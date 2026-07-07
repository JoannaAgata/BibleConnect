# BibleConnect

## Projektbeschreibung

BibleConnect ist eine verteilte Webanwendung, die den gemeinsamen Austausch über Bibelverse ermöglicht. Benutzer können Bibelverse lesen, Gruppen erstellen, Kommentare verfassen und Benachrichtigungen erhalten.

Das Projekt wurde im Rahmen der Studienleistung Software Engineering entwickelt und demonstriert eine verteilte Softwarearchitektur mit mehreren eigenständigen Services.

---

## Architektur

Die Anwendung besteht aus folgenden Komponenten:

- Frontend (React)
- API Gateway
- User Service
- Bible Service
- Group Service
- Comment Service
- Notification Service

Jeder Service läuft als eigener Prozess und übernimmt eine klar definierte Aufgabe.

---

## Technologien

- React
- Vite
- Node.js
- Express
- React Router
- Git
- GitHub

---

## Ports

| Service | Port |
|----------|------|
| API Gateway | 3000 |
| User Service | 3001 |
| Bible Service | 3002 |
| Group Service | 3003 |
| Comment Service | 3004 |
| Notification Service | 3005 |

---

## Projektstruktur

```text
BibleConnect
│
├── frontend
├── api-gateway
├── user-service
├── bible-service
├── group-service
├── comment-service
├── notification-service
└── docs
```

---

## Projekt starten

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Beispiel User Service:

```bash
cd user-service
npm install
npm start
```

Die übrigen Services werden analog gestartet.

---

## Dokumentation

Alle Entwicklungsschritte befinden sich im Ordner **docs**.

Enthalten sind:

- Architektur
- Entwicklungsplan
- GUI
- Pet Project
- Step01 bis Step12
- Screenshots

---

## Ziel

Ziel des Projekts ist die Entwicklung einer modularen verteilten Webanwendung, deren Funktionen auf mehrere eigenständige Services verteilt sind.