import * as model from '../models/reservations.model.js'
import { reservationsSchema } from '../validations/reservations.validation.js'


// Récupérer toutes les reservations

export const getReservations = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les menus
        const reservations = await model.getReservations();

        // Envoi des reservations au client
        res.json(reservations);

    } catch (error) {
        console.error(' Erreur getReservations :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des reservations' });
    }
};

// Pour créer une reservations

export const createReservations = async (req, res) => {
    try {
        // Structure du body
        const { nom, prenom, email, nombre, date, message } = req.body;
        

        // Validation via Joi
        const { error } = reservationsSchema.validate({ nom, prenom, email, nombre, date, message });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer des reservations
        await model.createReservations({ nom, prenom, email, nombre, date, message });

        // Réponse succès
        res.status(201).json({ message: 'Reservations créées' });

    } catch (error) {
        console.error(' Erreur createReservations :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des reservations' });
    }
};


// Pour récupérer les reservations par Id

export const getReservationsById = async (req, res) => {
    try {
        const { id } = req.params;

        const reservations = await model.getReservationsById(id);

        if (!reservations) {
            return res.status(404).json({ message: 'reservations introuvables' });
        }

        res.json(reservations);

    } catch (error) {
        console.error('Erreur getReservationsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des reservations' });
    }
};

// Mettre à jour des reservations par id 

export const updateReservationsById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingReservations = await model.getReservationsById(id)

        if(!existingReservations) {
            return res.status(404).json({message: 'Reservations introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            nom: req.body.titre ?? existingReservations.nom,
            prenom: req.body.prenom ?? existingReservations.prenom,
            email: req.body.email ?? existingReservations.email,
            nombre: req.body.nombre ?? existingReservations.nombre,
            date: req.body.date ?? existingReservations.date,
            message: req.body.texte ?? existingReservations.message
        }

        // valdiation avec joi

        const { error } = reservationsSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateReservationsById(id, updatedData);

        res.json({ message: 'Reservations mis à jour' });

    } catch (error) {
        console.error('Erreur updateReservationsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer des reservations par id 

export const deleteReservationsById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteReservationsById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Reservations introuvables' });
        }

        res.json({ message: 'Reservations supprimées' });

    } catch (error) {
        console.error('Erreur deleteReservationsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};




 
