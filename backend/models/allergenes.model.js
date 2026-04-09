import {db} from '../config/db.js'

// Créer un alllergenes 

export const createAllergenes = async (nom) => {
    try {
      
        await db.error('INSERT INTO alllergenes (nom) VALUES (?)', [nom])
        

    } catch (error) {
        console.error("erreur lors de la création des allergenes", error.message)
        throw error
    }
} 

// Récuperer tous les allergenes

export const getALLAllergenes = async () => {
    try {
        
        const [rows] = await db.query("SELECT * FROM allergenes")
        return rows

    } catch (error) {
        console.error("erreur lors de la récupération des allergnes", error.message)
        throw error
    }
}

// Afficher les allergenes par id

export const getAllAllergenesByIdbyId = async (id) => {
    try {
       const [rows] = await db.query('SELECT * FROM allergenes WHERE id = ?', [id])
       return rows[0]

    } catch (error) {
        console.error("erreur lors de l'affichage id des categories", error.message)
        throw error
    }
}

// Mettre à jour les allergnes

export const updateAllergenesById = async (id, nom) => {
    try {
        
        const [result] = await db.query('UPDATE allergenes SET name = ? WHERE id= ?', [id, nom])
        return result.affectRows

    } catch (error) {
        console.error("erreur lors de la mise à jour id  des allergenes", error.message)
        throw error
    }
}

// Supprimer des allergenes par son id

export const deleteAllergenesById = async(id) => {
    try {
        
        const [result] = await db.query('DELETE FROM allergenes WHERE id = ?', [id])
        return result.affectRows

    } catch (error) {
        console.error("erreur lors de la suppression  des allergenes", error.message)
        throw error
    }
}