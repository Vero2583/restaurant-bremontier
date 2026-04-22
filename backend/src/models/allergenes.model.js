import {db} from '../config/db.js'

// Créer un alllergenes 

export const createAllergenes = async (nom) => {
    try {
      
        const [rows] = await db.query('INSERT INTO allergenes (nom) VALUES (?)', [nom])
        return rows

    } catch (error) {
        console.error("erreur lors de la création des allergenes :", error.message)
        throw error
    }
} 

// Récuperer tous les allergenes

export const getAllergenes = async () => {
    try {
        
        const [rows] = await db.query("SELECT * FROM allergenes")
        return rows

    } catch (error) {
        console.error("erreur getAllergenes :", error.message)
        throw error
    }
}

// Afficher les allergenes par id

export const getAllergenesById = async (id) => {
    try {
       const [rows] = await db.query('SELECT * FROM allergenes WHERE id = ?', [id])
       return rows[0]

    } catch (error) {
        console.error("erreur getAllergenesById :", error.message)
        throw error
    }
}

// Mettre à jour les allergnes

export const updateAllergenesById = async (id, nom) => {
    try {
        
        const [result] = await db.query('UPDATE allergenes SET name = ? WHERE id= ?', [id, nom]);
        return result.affectRows

    } catch (error) {
        console.error("erreur updateAllergenes :", error.message)
        throw error
    }
}

// Supprimer des allergenes par son id

export const deleteAllergenesById = async(id) => {
    try {
        
        const [result] = await db.query('DELETE FROM allergenes WHERE id = ?', [id]);
        return result.affectRows

    } catch (error) {
        console.error("erreur deleteAllergenesById :", error.message)
        throw error
    }
}

// Ajouter les id dans les tables de liaisons 

export const addAllergenesEntrees = async (allergenes_id, entrees_id) => {
try {
    
    const [result] = await db.query('INSERT INTO allergenes_entrees(allergenes_id, entrees_id) VALUES (?, ?)', [
        allergenes_id, entrees_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addAllergenesEntrees :", error.message)
        throw error
}

}

export const addAllergenesPlats = async (allergenes_id, plats_id) => {
try {
    
    const [result] = await db.query('INSERT INTO allergenes_plats(allergenes_id, plats_id) VALUES (?, ?)', [
        allergenes_id, plats_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addAllergenesPlats :", error.message)
        throw error
}

}

export const addAllergenesDesserts = async (allergenes_id, desserts_id) => {
try {
    
    const [result] = await db.query('INSERT INTO allergenes_desserts(allergenes_id, desserts_id) VALUES (?, ?)', [
        allergenes_id, desserts_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addAllergenesDesserts :", error.message)
        throw error
}

}

export const addAllergenesboissons = async (allergenes_id, boissons_id) => {
try {
    
    const [result] = await db.query('INSERT INTO allergenes_boissons(allergenes_id, boissons_id) VALUES (?, ?)', [
        allergenes_id, boissons_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addAllergenesBoissons :", error.message)
        throw error
}

}

export const addAllergenesMenus = async (menus_id, allergenes_id) => {
try {
    
    const [result] = await db.query('INSERT INTO allergenes_menus(menus_id, allergenes_id) VALUES (?, ?)', [
        menus_id, allergenes_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addAllergenes :", error.message)
        throw error
}

}

