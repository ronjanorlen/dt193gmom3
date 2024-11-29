const dogController = require("../controllers/dog.controller"); // Inkludera controller 
// const Joi = require('joi'); // inkludera joi 
const { dogValidation } = require("../validation/dog.validation"); // Inkludera valideringsscheman 


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
            handler: dogController.addDog, // Skicka vidare till controller
            options: {
                validate: {
                    payload: dogValidation, // validera schemat
                    failAction: (request, h, err) => 
                        h.response({ message: err.message }).code(400).takeover(),
                },
            },
        }, 
    
        // Uppdatera hund
        {
            method: "PUT",
            path: "/dogs/{id}",
            handler: dogController.updateDog, // Skicka vidare till controller
            options: {
                validate: {
                    payload: dogValidation,
                    failAction: (request, h, err) => 
                        h.response({ message: err.message }).code(400).takeover(),
                },
            },
        },
        // Ta bort hund 
        {
            method: "DELETE",
            path: "/dogs/{id}",
            handler: dogController.deleteDog // Skicka vidare till controller 
    
        }]
    )
   
}