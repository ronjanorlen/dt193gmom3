# DT193G Moment 2 - Fullstack-utveckling med ramverk

Detta repository innehåller källkoden för ett API som hanterar information om hundar. Webbtjänsten implementerar full CRUD-funktionalitet för att skapa, läsa, uppdatera och ta bort data.  
Hund-api:et är byggt med ramverket Hapi och hanterar data i en MongoDB-databas. Validering av data 
som läggs till eller uppdateras hanteras med npm-paketet Joi och ett specifik valideringsschema. 

## Installation
Projektet kräver Node.js, MongoDB (lokalt eller via molntjänst som MongoDB Atals) samt anslutningsinställningar
till databasen. Klona ned källkodsfilerna med kommando `git clone` och kör därefter `npm install` för
att installera nödvändiga npm-paket.  
Skapa en egen .env-fil och lägg till de variabler som ska användas för eget bruk, ett exempel på denna finns i
.env.sample-filen. Starta servern med `npm run start`. 

## Schemastruktur
Webbtjänsten använder ett Mongoose-schema för att definiera strukturen för data om en hund. 
Detta ser ut enligt nedan: 

| Fält | Typ  | Beskrivning 
|--|--|--|
|name|String|Hundens namn.|
|owner|String|Hundens ägare.|
|breed|String|Hundens ras.|
|age|Number|Hundens ålder.|
|description|String|En beskrivning om hunden.|
|vaccinated|Boolean|Om hunden är vaccinerad eller inte.|
||||


När en ny hund läggs till skapas även ett id automatiskt som syns i databasen.


## Funktionalitet

Detta API har stöd för följande operationer:

- **GET /dogs**: Hämtar alla hundar från databasen.
- **GET /dogs/{id}**: Hämtar en hund med ett specifikt id.
- **POST /dogs**: Lägger till en ny hund i databasen.
- **PUT /dogs/{id}**: Uppdaterar en hund med ett specifikt id.
- **DELETE /dogs/{id}**: Tar bort en hund med ett specifikt id.


### Lägga till eller uppdatera hund
För att lägga till (POST) eller uppdatera (PUT) en hund skickas anropet i JSON-format. Se exempel nedan. Om något fält inte är ifyllt eller är felaktig returneras felmeddelande. Vid korrekt struktur och data lagras detta i databasen. 

**Body:**
```json
{
    "name": "Hundens namn",
    "owner": "Ägarens namn",
    "breed": "Hundens ras",
    "age": 5,
    "description": "Beskrivning av hunden",
    "vaccinated": true
}
```   
## Verktyg
* **Visual Studio Code:** Används som utvecklingsmiljö.
* **ThunderClient:** För test av routes.
* **Hapi & Joi:** Används som ramverk och hantering av validering.
* **MongoDB och MongoDB Compass:** Används som databas samt för kontroll av data i databas. 
* **Mongoose:** Används för struktur av data i databasen.
* **dotenv:** För hantering av anslutningsinställningar.
* **nodemon:** För liveuppdatering på servern. 
* **render.com:** För publicering av API. 

## Skapad:
Av: Ronja Norlén  
Kurs: DT193G - Fullstackutveckling med ramverk  
Program: Webbutveckling  
Skola: Mittuniversitetet  
År: 2024