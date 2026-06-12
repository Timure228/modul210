Version in `docker tag` heisst? -> Manifest  

Was ist ein Dockerfile? -> 

Bestandteile von Container -> Laufzeitumgebung, OS, Applikation

Layers von Containern: 

Container Orchestration Enhancement
(OpenShift, Tanzu, Rancher)

Container Orchestration
(Kubernetes or K8S/K3S, Docker Compose/Sworm)

Container Engine
(Docker Engine, Containerd Engine, Podman Engine, CRI-O Engine)

Was ist Orchestrierung

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

HPA for frontend

base64 for terminal [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes("your_text_here"))
