import {db} from '../config/db.js'

// Création des images

export const createImages = async (url) => {

    try {
      
        const [rows] =  await db.query('INSERT INTO images ( url ) VALUES (?)', [
            
        url
  
    ]);

    return rows;
        
    } catch (error) {
        console.error("erreur lors de la création d'image :", error.message)
        throw error
    }
} 

// Récupérer toutes les images

export const getImages = async () => {
    try {
        // Exécution de la requête SQL pour récupérer toutes les annonces
        const [rows] = await db.query('SELECT * FROM images');

        // Retourne le tableau d'entrees
        return rows;

    } catch (error) {
        console.error(' Erreur getImages :', error.message);
        throw error; // Laisser le controller gérer l'erreur et renvoyer un code HTTP
    }
};

// Récupérer des images par ID

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

// Mettre à jour des images par ID
// Champs non modifiables : id, user_id, created_at
 
export const updateimagesById = async (id, url) => {
    try {
        await db.query(
            `UPDATE images 
             SET url = ?,
             WHERE id = ?`,
            [
                url,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updateImagesById :', error.message);
        throw error;
    }
};

// Supprimer des entrees par ID

export const deleteImagesById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM images WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deleteImagesById :', error.message);
        throw error;
    }
};

