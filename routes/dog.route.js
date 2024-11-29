const dogController = require("../controllers/dog.controller"); // Inkludera controller 


module.exports = (server) => {
    server.route(
        [{
            method: "GET",
            path: "/dogs",
            handler: dogController.getAllDogs // Skicka vidare till controller 
        },

        // Hämta hund per id 
        {
            method: "GET",
            path: "/dogs/{id}",
            handler: dogController.getSingleDog // Skicka vidare till controller 
        },
    
        // Lägg till hund
        {
            method: "POST",
            path: "/dogs",
            handler: dogController.addDog // Skicka vidare till controller
        },
    
        // Uppdatera hund
        {
            method: "PUT",
            path: "/dogs/{id}",
            handler: dogController.updateDog // Skicka vidare till controller
        },
        // Ta bort hund 
        {
            method: "DELETE",
            path: "/dogs/{id}",
            handler: dogController.deleteDog // Skicka vidare till controller 
    
        }]
    )
   
}