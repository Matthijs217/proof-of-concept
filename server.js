import express from 'express'
import dotenv from "dotenv";

dotenv.config();

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
app.set('views', './views')

// Main root met gebruik van de API
app.get('/', async function (request, response) {

  const apiResponse = await fetch(`https://the-sprint-api.onrender.com/people`, {
    headers: {
      "x-api-key": process.env.API_KEY,
  },
  });
  const apiResponseJSON = await apiResponse.json()

  const messagesResponse = await fetch('https://fdnd.directus.app/items/messages')
  const messagesData = await messagesResponse.json()

  for (const mens of apiResponseJSON) {
    const message = messagesData.data.find(msg => msg.for === `Mens ${mens.id}`)
    if (message && !isNaN(parseInt(message.from))) {
      mens.likes = parseInt(message.from)
    } else {
      mens.likes = 0
    }
  }


  response.render('index.liquid', { mensen: apiResponseJSON });
})

app.post('/like/:id', async function (request, response) {
  const personId = request.params.id;

  const url = `https://fdnd.directus.app/items/messages?filter={"for":"Mens ${personId}"}`
  const messageResponse = await fetch(url)
  const messageResponseJSON = await messageResponse.json()

  if(messageResponseJSON.data.length > 0) {
    const likes = parseInt(messageResponseJSON.data[0].from || '1');
    const newLikes = likes + 1;
    console.log('patched')

    await fetch(`https://fdnd.directus.app/items/messages/${messageResponseJSON.data[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        from: newLikes,
      }),
    })
  } else { 
            console.log('post')
 
    await fetch('https://fdnd.directus.app/items/messages', {
      method: 'POST',
      body: JSON.stringify({
        for: `Mens ${personId}`,
        from: 1
      }),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  } 

  console.log(`👍 liked person ${personId}`)
  
  response.redirect(303, '/')
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})