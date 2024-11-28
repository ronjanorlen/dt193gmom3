const Dog = require("../models/dog.model"); // Inkludera model

// Funktion för att hämta alla hundar 
exports.getAllDogs = async (request, h) => {
    try {
        return await Dog.find();
    } catch (err) {
        return h.response(err).code(500);
    }
}

// Funktion för att hämta hund per id 
exports.getSingleDog = async (request, h) => {
    try {
        const dog = await Dog.findById(request.params.id)
        return dog || h.response("Hittade inte hunden.").code(404)
    } catch (err) {
        return h.response(err).code(500)
    }
}

// Funktion för att lägga till hund 
exports.addDog = async (request, h) => {
    try {
        const dog = new Dog(request.payload);
        return await dog.save();
    } catch (err) {
        return h.response(err).code(500);
    }
}