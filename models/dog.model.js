const Mongoose = require("mongoose"); // Inkludera mongoose

// Schema för hundar
const dogSchema = Mongoose.Schema(
    {
        name: String,
        owner: String,
        breed: String,
        age: Number, 
        description: String,
        vaccinated: Boolean
    }
)

const Dog = Mongoose.model("Dog", dogSchema); // Definiera modell och vilket schema som ska användas

module.exports = Dog; // Exportera ut model

