# Step 08 – Entwicklung des Bible Service

## Ziel

Ziel dieses Entwicklungsschrittes war die Entwicklung des Bible Service. Dieser Service stellt später Bibelverse und thematische Kategorien für die Anwendung BibleConnect bereit.

## Durchgeführte Arbeiten

- Eigenen Service eingerichtet.
- Express verwendet.
- Datei `server.js` erstellt.
- Service auf Port **3002** gestartet.
- REST-Endpunkte `/` und `/verse` implementiert.

## Bedeutung für die verteilte Architektur

Der Bible Service ist ein eigenständiger Prozess und übernimmt ausschließlich die Bereitstellung von Bibelinhalten. Dadurch bleibt die Anwendung modular aufgebaut und einzelne Services können unabhängig voneinander entwickelt und erweitert werden.

## Ergebnis

Der Bible Service wurde erfolgreich implementiert und getestet.

### Abbildung 1: Laufender Bible Service

![Bible Service](Screenshots/step08_bible_service.png)
