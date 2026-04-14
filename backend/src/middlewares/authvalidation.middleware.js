import {z} from "zod"

// la validation de l'authentification 

//l'enregistrement = register

export const validateRegister = (req, res, next) => {
    const schema = z.object({
        email: z.email(),
        password: z.string().min(8),
        confirmPassword: z.string().min(8)
    });
    try {
        
        schema.parse(req.body)
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({message: "les mots de passes ne correspondent pas"})
        }
        next()

    } catch (error) {
        return res.status(400).json({message : error.issues.map((err) => err.message).join(",") })
        
    }
}

// la connexion = login

export const validateLogin = (req, res, next) => {
    const schema = z.object({
        email: z.email(),
        password: z.string().min(8)
    })

    try {
        
        schema.parse(req.body)
        next()

    } catch (error) {
        return res.status(400).json({message : error.issues.map((err) => err.message).join(", ") })
    }
};

// la validation du password 

export const validateResetPasswordRequest = (req, res, next) => {
    const schema = z.object({
        email: z.email("L'adresse email n'est pas valide")
    })

    try {
        
        schema.parse(req.body);
        next();

    } catch (error) {
        return res.status(400).json({message : error.issues.map((err) => err.message).join(", ") })
    }
};

