Ontwerp en maak een data driven online concept voor een opdrachtgever

De instructies voor deze opdracht staan in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md)

# Q42 - Mensen pagina
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
- De HTML is semantisch correct opgebouwd, zodat die op meerdere browsers goed werkt en zelfs toegankelijkheid extra'tjes erbij krijgt.
- Met liquid worden de mensen uit de Q42 database opgehaald en getoond. Via de server kan je de mensen liken!

Als iemand bijvoorbeeld javascript heeft uitstaan dan linkt het mobile menu knop gelijk door naar de footer, waar dan de navigatie word getoond.
Als javascript dan weer aanstaat opent het menu met CSS. 

<img width="248" alt="Scherm­afbeelding 2025-06-19 om 10 13 09" src="https://github.com/user-attachments/assets/20cb0c18-996a-44e6-b00b-c6a9e105b397" />
<img width="243" alt="Scherm­afbeelding 2025-06-19 om 10 13 19" src="https://github.com/user-attachments/assets/a7b8b4b5-ed0d-4e75-930a-4ebd2b01a371" />

#### 3 – Usable  
- De pagina is mobile first en helemaal responsive. Dit betekent dat die vanaf elk device kan worden gezien en hoe grotet het device word het nog steeds werkt.
- De pagina is helemaal toegankelijk, wat betekent dat je met je toetsenbord ook de hele pagina zou kunnen bekijken en besturen (waaronder de like button)

Bijvoorbeeld de grid van de mensen van Q42, worden steeds meer colommen als het scherm breden word.

<img width="538" alt="Scherm­afbeelding 2025-06-19 om 10 15 10" src="https://github.com/user-attachments/assets/8157038c-5d9d-48f6-b389-1efdc5dcaf7f" />
<img width="585" alt="Scherm­afbeelding 2025-06-19 om 10 15 19" src="https://github.com/user-attachments/assets/6723598f-2a76-49e6-b47f-a8baf9039aef" />


#### 4 – Pleasurable  

- Hover animatie op de header
- Hover animatie op de mobile menu navigatie
- Hover animatie op de mensen van Q42
- Een mooie loading state als je het like knopje inklikt wat een heartbeat simuleert.

Bijvoorbeeld de hover op de mensen:

Uploading Schermopname 2025-06-19 om 10.50.28.mov…



## Kenmerken

Tijdens het project is er gewerkt met de techniek 'De hierarchy of user needs'. Door deze strategie te gebruiken wordt er gedacht aan progressive enhancement. Wat ervoor zorgt dat de site op elk moment goed werkt. Ook als iemand geen javascript heeft.

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
