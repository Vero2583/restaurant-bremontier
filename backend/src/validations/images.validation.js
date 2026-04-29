import Joi from 'joi'

export const imagesSchema = Joi.object({
    url: Joi.string().optional().allow(null)
     
});

