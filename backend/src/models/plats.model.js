import {db} from '../config/db.js'


// Récuperer tous les plats

export const getPlats = async () => {
    try {
        // Exécution de la requête SQL pour récuperer tous les plats
        const [rows] = await db.query('SELECT * FROM plats');

        // Retourne le tableau des plats
        return rows;

    } catch (error) {
        console.error('Erreur getPlats :', error.message)
        throw error
    }
}

// Créer un nouveau plats

export const createPlats = async (data) => {
    try {
        // Insertion sécurisée des données via placeholders
        await db.query(
            `INSERT INTO plats 
            (nom, prix, appartient_carte) 
            VALUES (?, ?, ?, NOW())`,
            [
                data.nom,
                data.prix,
                data.appartient_carte
            ]
        );

    } catch (error) {
        console.error(' Erreur createPlats :', error.message);
        throw error; 
    }
};

// Récuperer un plats par id 

export const getPlatsById = async (id) => {
    try {
        
        const [rows] = await db.query('SELECT * FROM plats WHERE id = ?', [id])

        return rows[0] || null

    } catch (error) {
        console.error('Erreur getPlatsById :', error.message)
        throw error
    }
}

// Mettre à jour un plats par Id

export const updatePlatsById = async (id, data) => {
    try {
        await db.query(
            `UPDATE annonces 
             SET nom = ?, prix = ?, appartient_carte = ?, WHERE id = ?`,
            [
                data.nom,
                data.prix,
                data.appartient_carte,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updatePlatsById :', error.message);
        throw error;
    }
};

// Supprimer un plats par id

export const deletePlatsById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM plats WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deletePlatsById :', error.message);
        throw error;
    }
};

// Ajouter les id dans les tables de liaison 

export const addMenusPlats = async (menus_id, plats_id) => {
try {
    
    const [result] = await db.query('INSERT INTO menus_plats(menus_id, plats_id) VALUES (?, ?)', [
        menus_id, plats_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addMenusPlats :", error.message)
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