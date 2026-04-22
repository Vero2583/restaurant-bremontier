import Joi from 'joi'

export const entreesSchema = Joi.object({
    image_id: Joi.number().optional().allow(null),
    nom: Joi.string().min(4),
    prix: Joi.number().positive().precision(2)
    
});

