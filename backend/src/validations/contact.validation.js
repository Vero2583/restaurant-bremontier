import Joi from 'joi'

export const contactSchema = Joi.object({
    nom: Joi.string().min(4).required(),
    email: Joi.string().required(),
    message: Joi.string().required()
    
});


