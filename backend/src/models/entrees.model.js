import {db} from '../config/db.js'

// Créer une entrees 

export const createEntrees = async (data) => {


    try {
      
        await db.query('INSERT INTO entrees ( nom, prix, appartient_carte) VALUES (?, ?, ?)', [
            
        data.nom,
        data.prix,
        data.appartient_carte
       
    ]);
        

    } catch (error) {
        console.error("erreur lors de la création des entrees :", error.message)
        throw error
    }
} 

// Récupérer toutes les entrees
export const getEntrees = async () => {
    try {
        // Exécution de la requête SQL pour récupérer toutes les annonces
        const [rows] = await db.query('SELECT * FROM entrees');

        // Retourne le tableau d'entrees
        return rows;

    } catch (error) {
        console.error(' Erreur getEntrees :', error.message);
        throw error; // Laisser le controller gérer l'erreur et renvoyer un code HTTP
    }
};

// Récupérer des entrees  par ID
export const getEntreesById = async (id) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM entrees WHERE id = ?',
            [id]
        );

        return rows[0] || null;

    } catch (error) {
        console.error('Erreur getEntreesById :', error.message);
        throw error;
    }
};

// Mettre à jour des entrees par ID
// Champs non modifiables : id, user_id, created_at
 
export const updateEntreesById = async (id, data) => {
    try {
        await db.query(
            `UPDATE entrees 
             SET nom = ?, prix = ?, appartient_carte = ?,
             WHERE id = ?`,
            [
                 data.nom,
                 data.prix,
                 data.appartient_carte,
                 id
            ]
        );

    } catch (error) {
        console.error('Erreur updateEntreesById :', error.message);
        throw error;
    }
};

// Supprimer des entrees par ID

export const deleteEntreesById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM entrees WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deleteEntreesById :', error.message);
        throw error;
    }
};

// Ajouter les id dans les tables de liaison 

export const addMenusEntrees = async (menus_id, entrees_id) => {
try {
    
    const [result] = await db.query('INSERT INTO menus_entrees(menus_id, entrees_id) VALUES (?, ?)', [
        menus_id, entrees_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addMenusEntrees :", error.message)
        throw error
}

}

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