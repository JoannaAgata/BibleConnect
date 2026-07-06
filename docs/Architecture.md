# Systemarchitektur

## 1. Architekturübersicht

BibleConnect wird als verteilte Anwendung (Distributed Application) entwickelt. 
Die Anwendung besteht aus mehreren eigenständigen Services, die jeweils einen klar definierten Aufgabenbereich übernehmen. Die Kommunikation zwischen den Komponenten erfolgt über REST-Schnittstellen.

Durch diese Aufteilung können einzelne Services unabhängig voneinander entwickelt, getestet und erweitert werden. Gleichzeitig erhöht die Architektur die Wartbarkeit und unterstützt eine klare 
Trennung der Verantwortlichkeiten.

## 2. Architekturdiagramm

```mermaid
graph TD

Frontend["React Frontend"]

Gateway["API Gateway"]

User["User Service"]
Bible["Bible Service"]
Comment["Comment Service"]
Group["Group Service"]
Notification["Notification Service"]

Database["PostgreSQL Database"]

Frontend --> Gateway

Gateway --> User
Gateway --> Bible
Gateway --> Comment
Gateway --> Group
Gateway --> Notification

User --> Database
Bible --> Database
Comment --> Database
Group --> Database
Notification --> Database
```
