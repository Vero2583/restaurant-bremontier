import {z} from "zod"


export const validateAllergenes = (req, res, next) => {
    const schema = z.object({
        nom: z.string(),
    })

    try {
        
        schema.parse(req.body)
        next()

    } catch (error) {
        return res.status(400).json({message : error.issues.map((err) => err.message).join(", ") })
    }
}

