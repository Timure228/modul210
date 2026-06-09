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
Nein

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

**Einfache Updates und Rollbacks:** Wenn sich der Programmcode ändert oder ein Sicherheitsupdate ansteht, editiert man nicht den laufenden Container. Man baut stattdessen ein komplett neues Image und ersetzt den alten Container durch einen neuen. Gibt es ein Problem, startet man in Millisekunden einfach wieder das alte Image (Rollback).

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
