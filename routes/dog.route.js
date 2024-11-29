const dogController = require("../controllers/dog.controller"); // Inkludera controller 
const { dogValidation, idValidation } = require("../validation/dog.validation"); // Inkludera valideringsscheman 


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
            handler: dogController.getSingleDog, // Skicka vidare till controller 
            options: {
                validate: {
                    params: idValidation, // idkontroll
                    failAction: (request, h, err) => {
                        throw err;
                    }
                }
            }
        },
    
        // Lägg till hund
        {
            method: "POST",
            path: "/dogs",
            handler: dogController.addDog, // Skicka vidare till controller
            options: {
                validate: {
                    payload: dogValidation, 
                    failAction: (request, h, err) => {
                        throw err;
                    }
                }
            }
        }, 
    
        // Uppdatera hund
        {
            method: "PUT",
            path: "/dogs/{id}",
            handler: dogController.updateDog, // Skicka vidare till controller
            options: {
                validate: {
                    payload: dogValidation, 
                    params: idValidation, // idkontroll
                    failAction: (request, h, err) => {
                        throw err;
                    }
                }
            }
        },
        // Ta bort hund 
        {
            method: "DELETE",
            path: "/dogs/{id}",
            handler: dogController.deleteDog, // Skicka vidare till controller 
            options: {
                validate: {
                    params: idValidation, // idkontroll
                    failAction: (request, h, err) => {
                        throw err;
                    }
                }
            }
    
        }]
    )
   
}