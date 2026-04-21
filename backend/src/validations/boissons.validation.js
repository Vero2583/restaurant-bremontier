import Joi from 'joi'

export const boissonsSchema = Joi.object({
    nom: Joi.string().min(4),
    prix: Joi.number().positive().precision(2),
    contient_alcool: Joi.string()
    
});


