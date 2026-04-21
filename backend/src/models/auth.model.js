import {db} from '../config/db.js'

// créer un utilisateur users

export const createUser = async (email, passwordHash, verifyToken) => {
    const [result] = await db.query("INSERT INTO users (email, password_hash, verify_token) VALUES (?, ?, ?)", 
        [email, passwordHash, verifyToken]
    )

    return result.insertId
}

// login trouver un users dans la base de données avec son email

export const findUserByEmail = async (email) => {
    const [rows] = await db.query(`SELECT * FROM users WHERE email = ?`, [email]);
    return rows [0]
}

// Verification de users par son token 

export const findUserByVerifyToken = async (token) => {
    const [rows] = await db.query(`SELECT * FROM users WHERE verify_token = ?`, [token])
    return rows[0]
}

// verification du users par son id 

export const verifyUser = async (usersId) => {
    await db.query(`UPDATE users SET is_verified=1, verify_token=NULL WHERE id=?`, [usersId])
}

// renouvellement du token car il est expiré au bout d'heure

export const findUserByResetToken = async (token) => {
    const [rows] = await db.query(`SELECT * FROM users WHERE reset_token = ?`, [token])
    return rows[0]
}

// mise à jour du password

export const updatePassword = async (usersId, passwordHash) => {
    await db.query(`UPDATE users SET password_hash = ? WHERE id = ?`, [usersId, passwordHash])
}

// Renouveller son mot de passe

export const saveResetPassword = async (usersId, token) => {
    await db.query(`UPDATE users SET reset_token = ? WHERE id = ?`, [token, usersId])
}

