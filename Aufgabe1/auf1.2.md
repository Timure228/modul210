# Grundlagen Cloud-Computing

## Welche Cloud Dienstleistungen kennen Sie?
Schau 1.1 Cloud Service Modelle 

## Welche Cloud Anbieter kennen Sie?
### Die "Big Three" (Marktführer)
 * **AWS (Amazon Web Services):** Der weltweite Pionier und Marktführer. Bietet die größte Auswahl an Einzeldiensten.

 * **Microsoft Azure:** Die Nummer 2. Perfekt für Unternehmen, da es sich nahtlos in bestehende Windows- und Office-Umgebungen integriert.

 * **Google Cloud Platform (GCP):** Die Nummer 3. Hat seine absoluten Stärken bei Datenanalyse, künstlicher Intelligenz (KI) und modernen Container-Anwendungen.

### Europäische Anbieter
 * IONOS 
 * STACKIT
 * OVHcloud

### Asiatische Riesen 
 * Alibaba Cloud
 * Tencent Cloud

## Was ist der wesentliche Unterschiede zwischen Monitoring und Logging in der Cloud?
**Monitoring (Metriken):** Misst das "Ob" in Echtzeit (z. B. CPU-Auslastung 95%). Es dient der Alarmierung, wenn Grenzwerte überschritten werden.

**Logging (Protokolle):** Dokumentiert das "Warum" als Text-Historie (z. B. Fehlermeldung X um 14:02 Uhr). Es dient der *Fehlersuche* nach einem Vorfall.

## Weshalb soll ich Dienste aus der Cloud beziehen? Was sind die Vorteile?
* **Kostenvorteil (Pay-as-you-Go):** Du zahlst nur das, was du wirklich verbrauchst. Keine teure Hardware im Voraus kaufen.
* **Flexibilität (Skalierbarkeit):** Brauchst du mehr Power oder Speicher? Ein Klick und es ist da. Wenn du es nicht mehr brauchst, regelst du es einfach wieder runter.
* **Kein Wartungsstress:** Um Server-Updates, Strom, Kühlung und kaputte Festplatten kümmert sich komplett der Anbieter. Du hast den Kopf frei.
* **Ausfallsicherheit:** Grosse Cloud-Anbieter haben gigantische Rechenzentren. Wenn dort ein Server abraucht, merkst du es meistens gar nicht, weil sofort ein anderer übernimmt.
* **Überall erreichbar:** Du und dein Team könnt von jedem Ort der Welt auf die Daten und Programme zugreifen – Hauptsache, das Internet läuft.

## Nachteile von Cloud Diensten
**Internet-Abhängigkeit:** Ohne stabiles Internet geht gar nichts – bricht die Verbindung ab, kommst du nicht an deine Daten oder Programme.

**Abhängigkeit vom Anbieter (Vendor Lock-in):** Wenn du einmal alles bei einem Anbieter aufgebaut hast, ist ein Wechsel zu einem anderen extrem aufwendig und teuer.

**Datenschutz & Recht:** Liegen die Daten auf US-Servern (wie bei AWS oder Microsoft), gibt es oft Konflikte mit der strengen europäischen DSGVO.

**Laufende Kosten:** Wenn man die Cloud falsch konfiguriert oder vergisst, ungenutzte Server abzuschalten, können die monatlichen Kosten schnell unbemerkt durch die Decke gehen.

**Kontrollverlust:** Du hast keine Kontrolle über die echte Hardware. Wenn der Anbieter eine Störung hat, kannst du nur abwarten und Tee trinken.

## Was beschreibt das Konzept der "Shared Responsibility" (geteilte Verantwortung) im Kontext der Nutzung von Public Cloud Diensten?
Das Prinzip der Shared Responsibility regelt, wer für die Sicherheit in der Cloud zuständig ist - der Cloud-Anbieter oder Kunde.

**Der Cloud-Anbieter** sorgt dafür, dass die physischen Rechenzentren geschützt sind, die Server laufen, der Strom nicht ausfällt und die grundlegende Hardware-Infrastruktur sicher ist.

**Der Kunde** ist immer für seine eigenen Daten verantwortlich. Er musst die Zugriffsrechte verwalten (wer darf rein?), starke Passwörter erzwingen, seine Daten verschlüsseln und – je nach Modell (wie bei IaaS) - sich auch selbst um Betriebssystem-Updates und die Firewall kümmern.