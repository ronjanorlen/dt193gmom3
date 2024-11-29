const Joi = require('joi'); // inkludera joi

// Valideringsschema  
const dogValidation = Joi.object(
    {
        name: Joi.string().required(),
        owner: Joi.string().required(),
        breed: Joi.string().required(),
        age: Joi.number().integer().min(0).required(),
        description: Joi.string().required(),
        vaccinated: Joi.boolean().required()
    }
);

module.exports = { dogValidation }; // Exportera valideringsschema