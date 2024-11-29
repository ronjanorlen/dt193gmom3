const Dog = require("../models/dog.model"); // Inkludera model
const { dogValidation } = require("../validation/dog.validation"); // Inkludera valideringsschema 

// Funktion för att hämta alla hundar 
exports.getAllDogs = async (request, h) => {
    try {
        const dogs = await Dog.find();
        // Om det inte finns några hundar att hämta 
        if (dogs.length === 0) {
            return h.response("Det finns inga hundar att hämta.").code(404);
        }
        return dogs; // Hämta hundar 
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Funktion för att hämta hund per id 
exports.getSingleDog = async (request, h) => {
    try {
        const dog = await Dog.findById(request.params.id)
        return dog || h.response("hittades inte").code(404); // Returnera hund eller felmeddelande om hunden inte finns
    } catch (err) {
        // Om felaktigt id anges
        return h.response({ message: "Något gick fel, kontrollera angivet id." }).code(500)
    }
};

// Funktion för att lägga till hund 
exports.addDog = async (request, h) => {
    try {
        // Validera data 
        const { error } = dogValidation.validate(request.payload);
        if (error) {
            // Om fel vid inmatning
            return h.response({ message: error.details[0].message }).code(400);
        }
        // Spara hund om korrekt inmatning 
        const dog = new Dog(request.payload);
        return await dog.save();
    } catch (err) {
        // Övriga fel 
        return h.response(err).code(500);
    }
};

// Funtion för att uppdatera hund 
exports.updateDog = async (request, h) => {
    try {
        // Validera data 
        const { error } = dogValidation.validate(request.payload);
        // Om fel vid uppdatering
        if (error) {
            return h.response({ message: error.details[0].message }).code(400);
        }
        return await Dog.findByIdAndUpdate(request.params.id,
            request.payload,
            { new: true }
        );
    } catch (err) {
        // Övriga fel 
        return h.response(err).code(500)
    }
};

// Funktion för att ta bort hund 
exports.deleteDog = async (request, h) => {
    try {
        // Ta bort hund och returnera meddelande
        return await Dog.findByIdAndDelete(request.params.id) && h.response("Hunden togs bort").code(200);
    } catch (err) {
        // Vid felaktigt id  
        return h.response({ message: "Något gick fel, kontrollera angivet id." }).code(500)
    }
};