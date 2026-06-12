## Wie wird der Begriff *Cloud* definiert?
**Cloud Computing** ist der bedarfsgerechte (on-demand), flexible Netzwerkzugriff auf einen gemeinsam genutzten Pool konfigurierbarer IT-Ressourcen (Server, Speicher, Apps) – schnell bereitgestellt ohne Verwaltungsaufwand oder Anbieterinteraktion.

## Welches sind die 5 Merkmale einer Cloud?
**On-Demand-Self-Service.** Ein Kunde kann Rechenkapazitäten wie Serverzeit und Netzwerkspeicher nach Bedarf automatisch und ohne menschliche Interaktion mit den einzelnen Dienstanbietern bereitstellen.

**Broad network access.** Die Kapazitäten sind über das Netzwerk verfügbar und können über Standardmechanismen genutzt werden, die die Nutzung durch heterogene Thin- oder Thick-Client-Plattformen (z. B. Mobiltelefone, Tablets, Laptops und Workstations) ermöglichen.

**Ressourcenpooling.** 
*Overcommitment* (mehr Ressourcen als effektiv genutzt),  
Anbieter bündelt physische/virtuelle IT-Ressourcen (Speicher, CPU, RAM, Bandbreite) in einem Mandantenmodell, um mehrere Kunden dynamisch nach Bedarf zu bedienen. Kunde hat keine exakte Standortkontrolle (nur grobe Region wählbar).

*Economy of Scale* führt zu sinkenden Kosten pro Einheit durch Massenproduktion.

*Overcommitment* bedeutet mehr Ressourcen zuzuweisen als real existieren (Auslastungsoptimierung)

**Rapid elasticity.** (Horizontale- und Vertikale-Skalierung), Fähigkeit, IT-Kapazitäten flexibel und oft automatisch je nach Bedarf nach innen/außen zu skalieren (*Scale-on-Demand*). Dies geschieht horizontal (mehr Instanzen) oder vertikal (mehr Power). Für den Nutzer wirken die Ressourcen dadurch unbegrenzt und jederzeit in beliebiger Menge verfügbar.

**Measured service.** Automatische Steuerung und Optimierung der Ressourcennutzung durch exakte Verbrauchsmessung (z. B. Speicher, CPU, Bandbreite). Überwachung und Dokumentation sorgen für volle Transparenz und ermöglichen verbrauchsabhängige Abrechnung (Pay-per-Use) für Anbieter und Nutzer.

## Welche Cloud Deployment Modelle kennen Sie?

**Private Cloud.** (Data Center erreichbar, ) Exklusive Nutzung der Cloud-Infrastruktur durch eine einzelne Organisation mit mehreren Untereinheiten. Betrieb, Verwaltung und physischer Standort können flexibel gestaltet sein: entweder intern durch das Unternehmen selbst oder extern über einen Drittanbieter (oder eine Kombination aus beiden).

**Community Cloud.** Gemeinsame Nutzung der Cloud-Infrastruktur durch eine spezifische Gruppe von Organisationen mit denselben Anliegen (z. B. gleiche Sicherheitsanforderungen, Compliance oder Mission). Betrieb, Verwaltung und Standort sind flexibel: intern durch die beteiligten Partner, über einen externen Drittanbieter oder in einer Mischform.

**Public Cloud.** *Containerisierung horizontal bevorzugt* Cloud-Infrastruktur steht der breiten Öffentlichkeit zur Verfügung. Sie wird von Unternehmen, Unis oder Behörden betrieben und befindet sich physisch beim jeweiligen Cloud-Anbieter.

**Hybrid Cloud.** Kombination aus zwei oder mehr separaten Cloud-Infrastrukturen (Private, Community oder Public). Die einzelnen Clouds bleiben eigenständige Einheiten, sind aber über Standards oder proprietäre Technik verbunden. Das ermöglicht Daten- und App-Portabilität, beispielsweise für Cloud Bursting zum Lastausgleich.

Public Cloud -> **Horizontal** (Scale-Out: flexibel neue Instanzen/Container zusteuern)
Private Cloud -> **Vertikal** (Scale-Up: feste Hardware mit mehr CPU/RAM aufrüsten)

## Was sind Cloud Service Modelle? 
**Software as a Service (SaaS).** Kunde nutzt fertige Apps des Anbieters über Webbrowser oder API (z. B. Web-Mail). Kunde verwaltet/kontrolliert absolut nichts an der Infrastruktur (Netzwerk, Server, OS, Speicher) oder den App-Funktionen. Einzige Ausnahme: minimale, benutzerspezifische Einstellungen.

**Platform as a Service (PaaS).** Kunde stellt eigene Apps (entwickelt mit Tools/Sprachen des Anbieters) auf der Cloud-Plattform bereit. Kunde kontrolliert keine Infrastruktur (Netzwerk, Server, OS, Speicher), hat aber volle Kontrolle über die eigenen Anwendungen und deren Laufzeitumgebung (Konfiguration).

**Infrastructure as a Service (IaaS).** Kunde mietet grundlegende IT-Ressourcen (Rechenleistung, Speicher, Netzwerk). Kunde kontrolliert die zugrunde liegende Infrastruktur nicht, hat aber volle Kontrolle über Betriebssysteme, Speicher, eigene Apps und limitierte Netzwerkelemente (z. B. Host-Firewalls).

# Grundlagen Cloud-Computing
## Welche Cloud Dienstleistungen kennen Sie?
**Schau 1.1 Cloud Service Modelle**

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

# Grundlagen Container-Technologie
## Was ist Container-Technologie oder Container-Virtualisierung?
**Container-Virtualisierung** ist eine Methode, um Anwendungen mitsamt allem, was sie zum Laufen brauchen (Code, Laufzeitumgebung, Systemwerkzeuge), in ein kompaktes, isoliertes Paket zu stecken: den *Container*.

**Klassische VM:** Packt ein komplettes, schweres Betriebssystem (Gast-OS) inklusive virtueller Hardware oben drauf. Das verbraucht viel Speicher und startet langsam.

**Container:** Teilt sich das Betriebssystem (den Kernel) des echten Host-Rechners mit anderen Containern. Sie sind deshalb extrem leichtgewichtig, nur megabytegroß und starten in Millisekunden.

## Was sind die Vor- und Nachteile der Container-Technologie zu virtuellen Servern (VM)?
### Vorteile von Containern (im Vergleich zu VMs)
* **Ressourceneffizienz:** Container teilen sich das Betriebssystem des Host-Rechners. Sie verbrauchen viel weniger Arbeitsspeicher und Speicherplatz als VMs, die jeweils ein eigenes, schweres Betriebssystem mitbringen.

* **Blitzschneller Start:** Da kein Betriebssystem hochgefahren werden muss, starten Container in Millisekunden. Eine VM braucht dafür Sekunden oder Minuten.

* **Perfekte Portabilität:** Ein Container läuft überall exakt gleich – auf dem Laptop des Entwicklers, dem Testserver oder in der Cloud ("Once written, run anywhere").

* **Höhere Dichte:** Auf derselben Hardware können deutlich mehr Container gleichzeitig laufen als VMs.

### Nachteile von Containern (im Vergleich zu VMs)
* **Geringere Isolation (Sicherheit):** Weil sich Container den gleichen Betriebssystem-Kern (Kernel) teilen, ist die Sicherheitsbarriere schwächer. Bricht ein Angreifer aus einem Container aus, kann er unter Umständen den gesamten Host-Server kapern. VMs sind durch die eigene virtuelle Hardware komplett voneinander isoliert.

* **Abhängigkeit vom Host-Betriebssystem:** Ein Linux-Container kann ohne spezielle Hilfsmittel nur auf einem Linux-Host laufen. VMs sind völlig flexibel (du kannst eine Windows-VM auf einem Linux-Host betreiben).

* **Erhöhter Verwaltungsaufwand bei vielen Containern:** Sobald du Dutzende oder Hunderte Container nutzt, brauchst du zwingend komplexe Zusatzwerkzeuge (wie Kubernetes) zur Steuerung, was die Einarbeitung erschwert.

## Welche Produkte kennen Sie im Zusammenhang mit virtuellen Servern und Container?
### Produkte für Virtuelle Server (VMs)
* **VMware vSphere / ESXi:** Der weltweite Marktführer für Unternehmen.

* **Microsoft Hyper-V:** Die Standard-Lösung direkt in Windows Server.

* **Proxmox VE:** Die beliebteste Open-Source-Alternative.

* **Oracle VirtualBox:** Gratis-Tool zum Testen auf dem eigenen Laptop.

### Produkte für Container
* **Docker:** Das absolute Standard-Tool, um Container zu erstellen und zu starten.

* **Podman:** Die sicherere, modernere Alternative zu Docker.

* **Kubernetes (K8s):** Das wichtigste Tool, um viele Container automatisch zu verwalten (Orchestrierung).

* **Red Hat OpenShift:** Die Kubernetes-Version für Grossunternehmen mit Support.

## Wie unterscheiden sich die Technologien VM und Container in Bezug auf Bereitstellung, Speicherplatz, Portabilität, Effizienz und Betriebssystem (Kernel)?
### Betriebssystem (Kernel)
* **VM:** Jede VM bringt ein eigenes, vollständiges Betriebssystem (Gast-OS) mit. Der Hypervisor isoliert die VMs komplett voneinander auf Hardware-Ebene.

* **Container:** Alle Container teilen sich den Betriebssystem-Kern (Kernel) des Host-Rechners. Sie sind nur logisch isolierte Prozesse auf demselben System.

### Speicherplatz
* **VM:** Sehr hoher Speicherbedarf (meist mehrere Gigabyte pro VM), da das gesamte Betriebssystem inklusive aller Systemdateien dupliziert wird.

* **Container:** Extrem geringer Speicherbedarf (oft nur wenige Megabyte), da nur die Anwendung und deren direkte Abhängigkeiten im Container liegen.

### Effizienz
* **VM:** Geringere Effizienz. Das eigene Betriebssystem verbraucht dauerhaft viel Arbeitsspeicher (RAM) und CPU-Leistung für Hintergrunddienste (Overhead).

* **Container:** Maximale Effizienz. Kaum spürbarer Overhead, da die Ressourcen fast ohne Verluste direkt vom Host-Betriebssystem genutzt werden.

### Bereitstellung
* **VM:** Langsam. Das Erstellen dauert Minuten, das Hochfahren des kompletten Gast-Betriebssystems beim Starten ebenfalls Sekunden bis Minuten.

* **Container:** Blitzschnell. Container werden über fertige Images (Vorlagen) in Sekunden erstellt und starten innerhalb von Millisekunden, da kein OS gebootet werden muss.

### Portabilität
* **VM:** Eingeschränkt. Der Export und Umzug einer VM zu einem anderen Hypervisor (z. B. von VMware zu Hyper-V) oder in die Cloud ist oft aufwendig und erfordert Konvertierungen.

* **Container:** Maximal. Ein Container läuft ohne jede Anpassung auf jedem System, auf dem die passende Container-Engine (z. B. Docker) installiert ist – egal ob Laptop, Server oder Cloud.

## Können virtuelle Server immer durch Container ersetzt werden?
**Nein**

Warum?
**Falsches Betriebssystem:** Container teilen sich den Kernel des Hosts. Auf einem Linux-Host kannst du keine Windows-Anwendung im Container laufen lassen. Eine VM bringt ihr eigenes Betriebssystem mit.

**Sicherheitsrisiko:** VMs isolieren komplett auf Hardware-Ebene. Bricht ein Hacker aus einem Container aus, steht er direkt auf dem Hauptserver. Für hochsensible Daten sind VMs sicherer.

**Alte Software (Legacy):** Viele alte, riesige Firmen-Programme lassen sich technisch nicht in Container zerlegen. Sie brauchen eine eigene, vollständige VM.

**Hardware-Zugriff:** Braucht eine Software direkten Zugriff auf spezielle Hardware-Treiber oder USB-Stecker, scheitern Container. VMs können Hardware direkt durchreichen.

## Können Sie die Begriffe Container, Image und Registry und erläutern? 
**Image (Das Rezept):** Ein Image ist eine schreibgeschützte Vorlage, die alles enthält, was eine Anwendung zum Laufen braucht (Code, Laufzeitumgebung, Tools). Es tut von alleine nichts, sondern dient als digitaler Bauplan.

**Container (Das fertige Gericht):** Ein Container ist die lebende, ausgeführte Instanz eines Images. Sobald du das Image startest, wird daraus ein isolierter Container, in dem das Programm tatsächlich läuft. Von einem Image kannst du beliebig viele Container gleichzeitig starten.

**Registry (Das Kochbuch-Regal):** Eine Registry ist der zentrale Lagerort für Images. Hier werden Images hochgeladen (Push), gespeichert und bei Bedarf von anderen Servern wieder heruntergeladen (Pull). Das bekannteste Beispiel ist **Docker Hub.**

## Weshalb werden laufende Conatiner in der Praxis als unveränderbar (immutable) betrachtet? 
**Einfache Updates und Rollbacks:** Wenn sich der Programmcode ändert oder ein Sicherheitsupdate ansteht, baut man ein komplett neues Image und ersetzt den alten Container durch einen neuen. Gibt es ein Problem, startet man in Millisekunden einfach wieder das alte Image (Rollback).

**Verhinderung von Konfigurations-Wildwuchs (Configuration Drift):** Wenn Administratoren Änderungen direkt in laufenden Containern vornehmen würden, liessen sich diese manuellen Schritte kaum nachvollziehen. Der Container würde sich von seinem ursprünglichen Bauplan (dem Image) entfernen.

**Zerstörbarkeit ohne Datenverlust (Statelessness):** Ein Container kann jederzeit abstürzen oder gelöscht werden, ohne dass Schaden entsteht. Wichtige Daten (wie Datenbanken oder User-Uploads) werden ohnehin niemals im Container gespeichert, sondern über externe Speicher (Volumes) angebunden.

**Beliebige Skalierbarkeit:** Da jeder Container exakt dem unveränderlichen Image entspricht, ist garantiert, dass der erste Container absolut identisch mit dem hundertsten Container läuft. Das automatische Hoch- und Runterskalieren wird dadurch extrem zuverlässig.

## Was ist unterschied zwischen Self-Managed und Fully Managed?
**Self-Managed (Eigenregie)**  
Du mietest nur die nackte Infrastruktur (z. B. einen virtuellen Server).
* Deine Aufgabe: Du musst das Betriebssystem updaten, die Firewall konfigurieren, Backups einrichten, die Software installieren und bei Abstürzen den Fehler suchen.

* Vorteil: Volle Kontrolle über jede kleinste Einstellung.

* Nachteil: Hoher Zeitaufwand und du brauchst tiefes Fachwissen.

**Fully Managed (Rundum-sorglos-Paket)**
Du mietest einen fertigen Dienst (z. B. eine fertige Datenbank oder WordPress-Instanz).

* Deine Aufgabe: Keine IT-Wartung. Du nutzt das Produkt einfach nur.

* Anbieter-Aufgabe: Der Cloud-Anbieter kümmert sich vollautomatisch um Updates, Sicherheits-Patches, Backups, Server-Ausfälle und die Skalierung.

* Vorteil: Keine Wartungsarbeit, maximale Zeitersparnis.

* Nachteil: Teurer und du kannst das System nicht tiefgreifend modifizieren.


# OTHER EXAM STUFF

Version in `docker tag` heisst? -> Manifest  

Was ist ein Dockerfile? -> einfache Textdatei, die automatisierte Schritt-für-Schritt-Anweisungen (Befehle) enthält, um ein Docker-Image zu bauen. Sie definiert das Betriebssystem, Umgebungsvariablen, Abhängigkeiten und den Code für eine Anwendung.

Was ist Docker compose? -> Ein Tool zur Definition und zum Starten von Multi-Container-Docker-Anwendungen. Über eine einzige docker-compose.yml-Datei (YAML) werden alle Services, Netzwerke und Volumes konfiguriert und mit nur einem Befehl.

Bestandteile von Container -> Laufzeitumgebung, OS, Applikation

## Layers von Containern: 

* Container Orchestration Enhancement
(OpenShift, Tanzu, Rancher)

* Container Orchestration
(Kubernetes or K8S/K3S, Docker Compose/Sworm)

* Container Engine
(Docker Engine, Containerd Engine, Podman Engine, CRI-O Engine)

Container Engine -> Die Container Engine ist die Software-Komponente, die Container auf einem Betriebssystem startet, stoppt und verwaltet.

Was ist Orchestrierung -> Die automatisierte Verwaltung, Koordinierung und Steuerung komplexer Computersysteme, Netzwerke, Container und Dienste.

oc delete all --selector=app-...

oc apply -f . (alles appleien in directory mit yaml files)

```
# Basis-Image definieren (hier Node.js Version 18)
FROM node:18

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Package-Dateien für Abhängigkeiten kopieren
COPY package*.json ./

# Abhängigkeiten während des Build-Prozesses installieren
RUN npm install

# Den restlichen Quellcode in den Container kopieren
COPY . .

# Port 3000 im Container dokumentieren/freigeben
EXPOSE 3000

# Standard-Startbefehl beim Ausführen des Containers festlegen
CMD ["node", "server.js"]
```

Wenn hellblau in AppUiO schau events, pods -> Fehler kopieren und downscalen
