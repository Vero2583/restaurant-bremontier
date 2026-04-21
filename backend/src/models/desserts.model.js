import {db} from '../config/db.js'


// Récuperer tous les menus

export const getDesserts = async () => {
    try {
        // Exécution de la requête SQL pour récuperer tous les menus
        const [rows] = await db.query('SELECT * FROM desserts');

        // Retourne le tableau des menus
        return rows;

    } catch (error) {
        console.error('Erreur getDesserts :', error.message)
        throw error
    }
}

// Créer une nouveau menus

export const createDesserts = async (data) => {
    try {
        // Insertion sécurisée des données via placeholders
        await db.query(
            `INSERT INTO menus 
            (nom, prix) 
            VALUES (?, ?, NOW())`,
            [
                data.nom,
                data.prix
            ]
        );

    } catch (error) {
        console.error(' Erreur createDesserts :', error.message);
        throw error; 
    }
};

// Récuperer un menus par id 

export const getDessertsById = async (id) => {
    try {
        
        const [rows] = await db.query('SELECT * FROM desserts WHERE id = ?', [id])

        return rows[0] || null

    } catch (error) {
        console.error('Erreur getDessertsById :', error.message)
        throw error
    }
}

// Mettre à jour un menus par Id

export const updateDessertsById = async (id, data) => {
    try {
        await db.query(
            `UPDATE annonces 
             SET nom = ?, prix = ?, WHERE id = ?`,
            [
                data.nom,
                data.prix,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updateDessertsById :', error.message);
        throw error;
    }
};

// Supprimer un menus par id

export const deleteDessertsById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM desserts WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deletedessertsById :', error.message);
        throw error;
    }
};

// Ajouter les id dans les tables de liaison 

export const addMenusDesserts = async (menus_id, desserts_id) => {
try {
    
    const [result] = await db.query('INSERT INTO menus_desserts(menus_id, desserts_id) VALUES (?, ?)', [
        menus_id, desserts_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addMenusDesserts :", error.message)
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