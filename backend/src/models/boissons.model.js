import {db} from '../config/db.js'


// Récuperer tous les boissons

export const getBoissons = async () => {
    try {
        // Exécution de la requête SQL pour récuperer tous les plats
        const [rows] = await db.query('SELECT * FROM boissons');

        // Retourne le tableau des plats
        return rows;

    } catch (error) {
        console.error('Erreur getBoissons :', error.message)
        throw error
    }
}

// Créer un nouveau boissons

export const createBoissons = async (data) => {
    try {
        // Insertion sécurisée des données via placeholders
        await db.query(
            `INSERT INTO boissons 
            (nom, prix, contient_alcool) 
            VALUES (?, ?, ?, NOW())`,
            [
                data.nom,
                data.prix,
                data.contient_alcool
            ]
        );

    } catch (error) {
        console.error(' Erreur createBoissons :', error.message);
        throw error; 
    }
};

// Récuperer un boissons par id 

export const getBoissonsById = async (id) => {
    try {
        
        const [rows] = await db.query('SELECT * FROM boissons WHERE id = ?', [id])

        return rows[0] || null

    } catch (error) {
        console.error('Erreur getboissonsById :', error.message)
        throw error
    }
}

// Mettre à jour un boissons par Id

export const updateBoissonsById = async (id, data) => {
    try {
        await db.query(
            `UPDATE boissons 
             SET nom = ?, prix = ?, contient_alcool = ?, WHERE id = ?`,
            [
                data.nom,
                data.prix,
                data.contient_alcool,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updateBoissonsById :', error.message);
        throw error;
    }
};

// Supprimer un plats par id

export const deleteBoissonsById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM boissons WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deleteBoissonsById :', error.message);
        throw error;
    }
};







