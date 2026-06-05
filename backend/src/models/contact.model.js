import {db} from '../config/db.js'


// Récuperer tous les contacts

export const getContact = async () => {
    try {
        // Exécution de la requête SQL pour récuperer tous les plats
        const [rows] = await db.query('SELECT * FROM contact');

        // Retourne le tableau des contacts
        return rows;

    } catch (error) {
        console.error('Erreur getContact :', error.message)
        throw error
    }
}

// Créer un nouveau contact

export const createContact = async (data) => {
    try {
        // Insertion sécurisée des données via placeholders
        await db.query(
            `INSERT INTO contact 
            (nom, email, message) 
            VALUES (?, ?, ?)`,
            [
                data.nom,
                data.email,
                data.message
            ]
        );

    } catch (error) {
        console.error(' Erreur createContact :', error.message);
        throw error; 
    }
};

// Récuperer un boissons par id 

export const getContactById = async (id) => {
    try {
        
        const [rows] = await db.query('SELECT * FROM contact WHERE id = ?', [id])

        return rows[0] || null

    } catch (error) {
        console.error('Erreur getcontactById :', error.message)
        throw error
    }
}

// Mettre à jour un contact par Id

export const updateContactById = async (id, data) => {
    try {
        await db.query(
            `UPDATE contact 
             SET nom = ?, email = ?, message = ?, WHERE id = ?`,
            [
                data.nom,
                data.email,
                data.message,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updateContactById :', error.message);
        throw error;
    }
};

// Supprimer un contact par id

export const deleteContactById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM contact WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deleteContactById :', error.message);
        throw error;
    }
};







