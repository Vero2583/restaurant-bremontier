import {db} from '../config/db.js'


// Récuperer tous les menus

export const getMenus = async () => {
    try {
        // Exécution de la requête SQL pour récuperer tous les menus
        const [rows] = await db.query('SELECT * FROM menus');

        // Retourne le tableau des menus
        return rows;

    } catch (error) {
        console.error('Erreur getMenus :', error.message)
        throw error
    }
}

// Créer une nouveau menus

export const createMenus = async (data) => {
    try {
        // Insertion sécurisée des données via placeholders
        await db.query(
            `INSERT INTO menus 
            (titre, prix, texte) 
            VALUES (?, ?, ?, NOW())`,
            [
                data.titre,
                data.prix,
                data.texte
            ]
        );

    } catch (error) {
        console.error(' Erreur createMenus :', error.message);
        throw error; 
    }
};

// Récuperer un menus par id 

export const getMenusById = async (id) => {
    try {
        
        const [rows] = await db.query('SELECT * FROM menus WHERE id = ?', [id])

        return rows[0] || null

    } catch (error) {
        console.error('Erreur getMenusById :', error.message)
        throw error
    }
}

// Mettre à jour un menus par Id

export const updateMenusById = async (id, data) => {
    try {
        await db.query(
            `UPDATE menus 
             SET titre = ?, prix = ?, texte = ?, WHERE id = ?`,
            [
                data.titre,
                data.prix,
                data.texte,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updateMenusById :', error.message);
        throw error;
    }
};

// Supprimer un menus par id

export const deleteMenusById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM menus WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deleteMenusById :', error.message);
        throw error;
    }
};

// Ajouter les id dans les tables de liaison 

export const addAllergenesMenus = async (menus_id, allergenes_id) => {
try {
    
    const [result] = await db.query('INSERT INTO allergenes_menus(menus_id, allergenes_id) VALUES (?, ?)', [
        menus_id, allergenes_id
    ])
      return result.affectRows


} catch (error) {
     console.error("erreur addAllergenesMenus :", error.message)
        throw error
}

}

