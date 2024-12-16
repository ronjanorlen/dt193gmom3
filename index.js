'use strict';

const Hapi = require('@hapi/hapi'); // Använd hapi
const Mongoose = require("mongoose"); // Inkludera mongoose
require("dotenv").config(); // Inkludera dotenv

// Funktion för att starta server
const init = async () => {

    // Initiera server
    const server = Hapi.server({
        port: process.env.PORT || 5000, // Ändra till 5000 för backend
        host: '0.0.0.0', // Hitta anslutning från extern ip-adress
        routes: {
            cors: {
                origin: ['http://localhost:5173'], ///Tillåt Vue-frontend
                credentials: true // Tillåt cookies om det behövs
            }
        }
    });

    // Anslut till MongoDB
    Mongoose.connect(process.env.DATABASE).then(() => {
        console.log("Ansluten till MongoDB");
    }).catch((error) => {
        console.error("Fel vid anslutning till databas: " + error);
    });


    // Importera routes
    require("./routes/dog.route")(server);


    // Starta server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();