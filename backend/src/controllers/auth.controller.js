import { db } from "../config/db.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { v4 as uuid4 } from "uuid";
import {
  createUser,
  findUserByEmail,
  findUserByVerifyToken,
  findUserByResetToken,
  verifyUser,
  saveResetPassword,
  updatePassqord,
} from "../models/auth.model.js";





// Enregistrer un email, register

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await findUserByEmail(email);
    if (existing)
    return res.status(400).json({ message: "Email déjà utilisé" });
    
    const passwordHash = await argon2.hash(password);
    const verifyToken = uuid4();

    await createUser(email, passwordHash, verifyToken);
    await sendVerificationMail(email, verifyToken);

    res.status(201).json({ message: "compte crée, verifier votre email" });

  } catch (error) {
    res.status(500).json({ message: "erreur serveur", error: error.message });
  }
};


export const verifyEmail = async (req, res)  =>  {
    try {
        
        const {token} = req.query
        const users = await findUserByVerifyToken(token)
        if (!users) return res.status(400).json({ message: "Token invalide"})
            await verifyUser(users.id)

        res.status(200).json({message: "votre compte a bien été vérifié"})

    } catch (error) {
        res.status(500).json({message: "erreur serveur", error: error.message})
    }
}

// La connexion au backend = login

export const login = async (req, res) => {
    try {
       const {email, password} = req.body
       const users = await findUserByEmail(email)
       if (!users) {
        return res.status(400).json({message: "Email ou mot de passe incorrect"})
       }
       if (!users.is_verified) {
        return res.status(403).json({message: "compte non verifier"})
       }

       const valide = await argon2.verify(users.password_hash, password)
       if (!valide) {
        return res.status(400).json({message: "Email ou mot de passe incorrect"})
       }
        
       const token = jwt.sign({id: users.id, email: users.email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
       return res.status(200).json({token})

    } catch (error) {
        return res.status(500).json({message: "Erreur serveur"})
    }
}

// Réinitialiser le mot de passe = ResetPassword

export const resetPasswordRequest = async (req, res) => {
    try {
       
        const {email} = req.body
        const users = await findUserByEmail(email)
        if (!users) return res.status(400).json({message: "email non trouver"})
        
        const resetToken = uuid4()

        await saveResetPassword(users.id, resetToken)
        await sendResetPasswordEmail(email, resetToken)

        res.status(200).json({message: "email de rénitialisation a été envoyé"})

    } catch (error) {
        res.status(500).json({message: "erreur server", error: error.message})
    }
}

export const resetPassword = async (req, res) => {
    try {
        
        const {token, password} = req.body
        const users = await findUserByResetToken(token)
        if (!users) return res.status(400).json({message: "Utilisateur non trouver ou token invalide"})

        const passwordHash = await argon2.hash(password) 
        await updatePassqord(users.id, passwordHash)   
 
        await db.query("UPDATE users SET reset_token=NULL WHERE id = ?", [users.id])

        res.status(200).json({message: "Mot de passe réinitialiser avec success"})

    } catch (error) {
        res.status(500).json({message: "erreur server", error: error.message})
    }
}

// La déconnexion du dashboard et de la base de données

export const logout = (req, res) => {
    try {
        
        const users_id = req.users.id
        removeUserKey(users_id)

        res.json({message: "déconnexion réussie"})

    } catch (error) {
        res.status(500).json({message: "erreur server", error: error.message})
    }
}

