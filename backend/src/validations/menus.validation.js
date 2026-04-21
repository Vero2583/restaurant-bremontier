import Joi from 'joi'

export const menusSchema = Joi.object({
    titre: Joi.string().min(4),
    prix : Joi.number().positive().precision(2),
    text: Joi.string()

});

