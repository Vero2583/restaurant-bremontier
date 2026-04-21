import * as model from '../models/menus.model.js'
import { dessertsSchema } from '../validations/desserts.validation.js'


// Récupérer toutes les desserts

export const getDesserts = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les desserts
        const menus = await model.getDesserts();

        // Envoi des annonces au client
        res.json(desserts);

    } catch (error) {
        console.error(' Erreur getDesserts :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des desserts' });
    }
};

// Pour créer un nouveau desserts

export const createDesserts = async (req, res) => {
    try {
        // Structure du body
        const { nom, prix, } = req.body;
        

        // Validation via Joi
        const { error } = dessertsSchema.validate({ nom, prix, });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer les desserts
        await model.createDesserts({ nom, prix, });

        // Réponse succès
        res.status(201).json({ message: 'Desserts créées' });

    } catch (error) {
        console.error(' Erreur createDesserts :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des desserts' });
    }
};


// Pour récupérer desserts par Id

export const getDessertsById = async (req, res) => {
    try {
        const { id } = req.params;

        const desserts = await model.getDessertsById(id);

        if (!desserts) {
            return res.status(404).json({ message: 'desserts introuvables' });
        }

        res.json(desserts);

    } catch (error) {
        console.error('Erreur getDessertsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des desserts' });
    }
};

// Mettre à jour des desserts par id 

export const updateDessertsById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingDesserts = await model.getDessertsById(id)

        if(!existingDesserts) {
            return res.status(404).json({message: 'Desserts introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            nom: req.body.titre ?? existingDesserts.nom,
            prix: req.body.prix ?? existingDesserts.prix
        }

        // valdiation avec joi

        const { error } = dessertsSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateDessertsById(id, updatedData);

        res.json({ message: 'Desserts mis à jour' });

    } catch (error) {
        console.error('Erreur updateDessertsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer un desserts par id 

export const deleteDessertsById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteDessertsById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Desserts introuvables' });
        }

        res.json({ message: 'Desserts supprimées' });

    } catch (error) {
        console.error('Erreur deleteDessertsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};





 
