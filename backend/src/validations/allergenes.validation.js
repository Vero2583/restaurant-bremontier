import Joi from 'joi'

export const allergenesSchema = Joi.object({
    nom: Joi.string().required()
});


