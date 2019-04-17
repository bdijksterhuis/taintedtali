# Project taintedtali

Dit is een een Angular project website voor een twitch streamer genaamd Taintedtali 

---
## LET OP! Dit project is nog in ontwikkeling! 
Dit betekend dat de code nog erg sloppy is en de tests momenteel niet werken! (Dit is dus inderdaad niet op een TDD manier gebouwd)

---

### De site 
De site is gebouwd op basis van Angular en gebruikt het [Contentful CMS](https://www.contentful.com). 
Het CMS is dus een third-party site die aangeroepen word via een API. De API key is te vinden in de src/environments folder.

### Status 
Zoals hierboven aangegeven, dit project zit midden in ontwikkeling, dit is momenteel een redelijk stabiele build en is werkt goed genoeg om een beeld te krijgen. 
Houd er echter rekening mee dat deze build bij lange na niet feature complete is en de code ongedocumenteerd en ongetest is. 

### Content structuur
De structuur van de content is op een erg specifieke manier neer gezet. De layout is, als het ware, opgebouwd uit 1 colom waarbij elke stukje content 1 rij in beslag neemt. Dit betekend dat we een content model op kunnen stellen waarin een pagina volledig dynamisch opgebouwd word vanuit het CMS. 

Het CMS is zo ingericht dat de gebruiker een pagina aanmaakt, bijvoorbeeld, 'home', 'over mij' of 'contact'. In deze pagina kan de gebruiker dan zelf kiezen welke content blokken waar komen te staan. Deze blokken zijn los aan te maken in het CMS, zo kan de gebruiker bijvoorbeeld een 'header' component toevoegen of een 'contact formulier' component. 

Het Angular project haalt deze elementen op uit het CMS en aan de hand van het verkregen JSON object wordt een interne pagina, blokken en content structuur opgebouwd. Daar wordt vervolgens door heen geloopt en worden de verschillende blokken op de pagina opgebouwd. 

### Fases
Dit project is opgebouwd uit verschillende fases. Fase 1 was het ontwerp in Photoshop, Fase 2 was het slicen van dit ontwerp naar HTML / CSS en dit is Fase 3, het Angular project. Nadat deze fase afgerond is zal de site live gaan voor gebruik. Dan gaat echter ook Fase 4 van start. Hierin ga ik de site omzetten van een Contentful CMS naar een eigen CMS op basis van een NodeJS backend met een NoSQL database (hoogstwaarschijnlijk MongoDB). 

### De site draaien
1. Haal eerst het project binnen via GIT
2. Voper `npm install` uit in de root van het project
3. Voer `ng serve` uit in de root van het project (werkt dit niet kan het zijn dat je nog een `npm install -g @angular/cli` moet doen om de Angular CLI te installeren)

### Vragen?
Stel ze! [bryan.dijksterhuis@live.nl](mailto:bryan_dijksterhuis@live.nl)