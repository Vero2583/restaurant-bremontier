import Joi from 'joi'

export const reservationsSchema = Joi.object({
    nom: Joi.string().min(4),
    prenom: Joi.string().min(4),
    email: Joi.string().email().required(),
    nombre : Joi.number().positive().precision(2),
    date: Joi.date().required(),
    message: Joi.string().min(5)

});