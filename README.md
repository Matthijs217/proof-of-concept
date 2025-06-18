Ontwerp en maak een data driven online concept voor een opdrachtgever

De instructies voor deze opdracht staan in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inleiding

Ik heb een responsive, mobile first en dynamische pagina voor Q42 gemaakt, dit is een pagina om de mensen bij Q42 te tonen op een leuke manier. De mensen hebben allemaal een like knop die optelt!

bekijk de live site hier! https://proof-of-concept-1plt.onrender.com/

<img src="https://github.com/user-attachments/assets/0b7202ed-6892-4f93-b248-930a02b7ea00" width="288">
<img src="https://github.com/user-attachments/assets/65b8a827-3ff1-4a16-bfcf-9eb09d336cd1" width="288">
<img src="https://github.com/user-attachments/assets/df5693a1-b82e-4c06-a0ff-af6df04682bc" width="288">


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
#### 1 & 2 – Functional & Reliable
- De paginatie werkt via een server-side, waardoor de pagina ook zonder client-side JavaScript en CSS volledig functioneel blijft. 
- De HTML is semantisch correct opgebouwd, zodat die op meerdere browsers goed werkt en zelfs toegankelijkheid dingetjes erbij krijgt.
- Met liquid worden de mensen uit de Q42 database opgehaald en getoond. Via de server kan je de mensen liken!

#### 3 – Usable  
- De pagina is mobile first en helemaal responsive. Dit betekent dat die vanaf elk device kan worden gezien en hoe grotet het device word het nog steeds werkt.
- De pagina is helemaal toegankelijk, wat betekent dat je met je toetsenbord ook de hele pagina zou kunnen bekijken en besturen.

#### 4 – Pleasurable  

- Hover animatie op de header
- Hover animatie op de mobile menu navigatie
- Hover animatie op de mensen van Q42
- Een mooie loading state als je het like knopje inklikt wat een heartbeat simuleert.

## Kenmerken

Voor dit project is gebruik gemaakt van Node.js en Express om een webserver te bouwen. De HTML-pagina’s worden gegenereerd met Liquid, een template-engine waarmee je makkelijk dynamische content kunt tonen.

## Routes

- 'get /' route die de index.liquid toont (hoofdpagina)
- 'post /like/:id' route die zorgt voor de afhandeling van de like op de mensen

### Gebruikte tools

- **Express.js** – server en routing  
- **LiquidJS** – templates renderen  
- **Directus API** – formulierdata opslaan  
- **Fetch API** – data ophalen in routes


## Installatie

Om het project lokaal te gebruiken heb je Node.js nodig. Daarna kun je het project openen in een code-editor.

1. Installeer de benodigde pakketten:
   ```bash
   npm install
2. Start de server:
   ```bash
   npm start
3. Bekijk het project in je browser via:
   ```bash
   http://localhost:8000

## Bronnen
- Website van [Q42](https://www.q42.nl/q-ers)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
