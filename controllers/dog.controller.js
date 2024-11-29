const Dog = require("../models/dog.model"); // Inkludera model
const { dogValidation } = require("../validation/dog.validation"); // Inkludera valideringsschema 

// Funktion för att hämta alla hundar 
exports.getAllDogs = async (request, h) => {
    try {
        return await Dog.find();
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Funktion för att hämta hund per id 
exports.getSingleDog = async (request, h) => {
    try {
        const dog = await Dog.findById(request.params.id)
        return dog || h.response("Hittade inte hunden.").code(404)
    } catch (err) {
        return h.response(err).code(500)
    }
};

// Funktion för att lägga till hund 
exports.addDog = async (request, h) => {
    try {
        // Validera data 
        const { error } = dogValidation.validate(request.payload);
        if (error) {
            return h.response({ message: error.details[0].message }).code(400);
        }
        // Spara hund om korrekt inmatning 
        const dog = new Dog(request.payload);
        return await dog.save();
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Funtion för att uppdatera hund 
exports.updateDog = async (request, h) => {
    try {
        // Validera data 
        const { error } = dogValidation.validate(request.payload);
        if (error) {
            return h.response({ message: error.details[0].message }).code(400);
        }
        return await Dog.findByIdAndUpdate(request.params.id,
            request.payload,
            { new: true }
        );
    } catch (err) {
        return h.response(err).code(500)
    }
};

// Funktion för att ta bort hund 
exports.deleteDog = async (request, h) => {
    try {
        return await Dog.findByIdAndDelete(request.params.id)
    } catch (err) {
        return h.response(err).code(500)
    }
};