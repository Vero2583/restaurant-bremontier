import * as model from '../models/plats.model.js'
import { platsSchema } from '../validations/plats.validation.js'


// Récupérer toutes les plats

export const getPlats = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les plats
        const plats = await model.getPlats();

        // Envoi des plats au client
        res.json(plats);

    } catch (error) {
        console.error(' Erreur getPlats :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des plats' });
    }
};

// Pour créer un nouveau plats

export const createPlats = async (req, res) => {
    try {
        // Structure du body
        const { nom, prix } = req.body;
        

        // Validation via Joi
        const { error } = platsSchema.validate({ nom, prix });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer les plats
        await model.createPlats({ nom, prix });

        // Réponse succès
        res.status(201).json({ message: 'Plats créées' });

    } catch (error) {
        console.error(' Erreur createPlats :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des plats' });
    }
};


// Pour récupérer plats par Id

export const getPlatsById = async (req, res) => {
    try {
        const { id } = req.params;

        const menus = await model.getPlatsById(id);

        if (!plats) {
            return res.status(404).json({ message: 'plats introuvables' });
        }

        res.json(plats);

    } catch (error) {
        console.error('Erreur getPlatsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des plats' });
    }
};

// Mettre à jour un plats par id 

export const updatePlatsById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingPlats = await model.getPlatsById(id)

        if(!existingPlats) {
            return res.status(404).json({message: 'Plats introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            nom: req.body.titre ?? existingPlats.titre,
            prix: req.body.prix ?? existingPlats.prix,
        }

        // valdiation avec joi

        const { error } = platsSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updatePlatsById(id, updatedData);

        res.json({ message: 'Plats mis à jour' });

    } catch (error) {
        console.error('Erreur updatePlatsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer un plats par id 

export const deletePlatsById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deletePlatseById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Plats introuvable' });
        }

        res.json({ message: 'Plats supprimée' });

    } catch (error) {
        console.error('Erreur deletePlatsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};




 
