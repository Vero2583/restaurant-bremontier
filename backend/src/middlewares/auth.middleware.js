import jwt from 'jsonwebtoken'
import 'dotenv/config'


// middleware pour verifier si on est authentifié 

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({message: "Token manquant"})

    const token = authHeader.split(" ")[1]

    try {

        req.user = jwt.verify(token, process.env.JWT_SECRET)
        if(!req.user) throw new Error("L'utilisateur n'est pas identifier")
         next()    
        
        
    } catch (error) {
       return res.status(403).json({messge: "Token invalide"}) 
    }
}



