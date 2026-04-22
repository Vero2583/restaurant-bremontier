import {db} from '../config/db.js'


// Récuperer tous les reservationss

export const getReservations = async () => {
    try {
        // Exécution de la requête SQL pour récuperer tous les menus
        const [rows] = await db.query('SELECT * FROM reservations');

        // Retourne le tableau des menus
        return rows;

    } catch (error) {
        console.error('Erreur getReservations :', error.message)
        throw error
    }
}

// Créer une nouveau reservations

export const createReservations = async (data) => {
    try {
        // Insertion sécurisée des données via placeholders
        await db.query(
            `INSERT INTO reservations 
            (nom, prenom, email, nombre, date, message) 
            VALUES (?, ?, ?, ?, ?, ?, NOW())`,
            [
                data.nom,
                data.prenom,
                data.email,
                data.nombre,
                data.date,
                data.message
            ]
        );

    } catch (error) {
        console.error(' Erreur createReservations :', error.message);
        throw error; 
    }
};

// Récuperer un reservations par id 

export const getReservationsById = async (id) => {
    try {
        
        const [rows] = await db.query('SELECT * FROM reservations WHERE id = ?', [id])

        return rows[0] || null

    } catch (error) {
        console.error('Erreur getReservationsById :', error.message)
        throw error
    }
}

// Mettre à jour un reservationss par Id

export const updateReservationsById = async (id, data) => {
    try {
        await db.query(
            `UPDATE reservations 
             SET nom = ?, prenom = ?, email = ?, nombre = ?, date = ?, message = ?, WHERE id = ?`,
            [
                data.nom,
                data.prenom,
                data.email,
                data.nombre,
                data.date,
                data.message,
                id
            ]
        );

    } catch (error) {
        console.error('Erreur updateReservationsById :', error.message);
        throw error;
    }
};

// Supprimer un reservations par id

export const deleteReservationsById = async (id) => {
    try {
        const [result] = await db.query(
            'DELETE FROM reservations WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Erreur deleteReservationsById :', error.message);
        throw error;
    }
};



