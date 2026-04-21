import * as model from '../models/allergenes.model.js'
import { allergenesSchema } from '../validations/allergenes.validation.js';


// Créer des allergenes 

export const createAllergenes = async (req, res) => {
    try {

        // Pour récupérer le champ 'nom' dans le sql 
        const { nom } = req.body;

        if (!nom) {
            return res.status(400).json({ message: 'Le nom des allergenes est requis' });
        }

              // Validation via Zod
        const { error } = allergenesSchema.validate({ nom });
        if (error) {
           return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer les allergenes
        await model.createAllergenes(nom);

        // Réponse succès
        res.status(201).json({ message: 'Allergenes créées' });

    } catch (error) {
        console.error('Erreur createAllergenes :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des allergenes' });
    }
};

// Pour récupérer toutes les allergenes

export const getAllergenes = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les catégories
        const allergenes = await model.getAllergenes();

        // Renvoi du résultat au client
        res.json(allergenes);

    } catch (error) {
        console.error(' Erreur getAllergenes :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des allergenes' });
    }
};

// Pour récupérer une catégorie par ID

export const getAllergenesById = async (req, res) => {
    try {
        const { id } = req.params;

        const allergenes = await model.getAllergenesById(id);

        if (!allergenes) {
            return res.status(404).json({ message: 'allergenes introuvables' });
        }

        res.json(allergenes);

    } catch (error) {
        console.error('Erreur getAllergenesById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des allergenes' });
    }
};

// Pour mettre à jour une catégorie par ID

export const updateAllergenesById = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom } = req.body;

        if (!nom) {
            return res.status(400).json({ message: 'Le nom de des allergenes est requis' });
        }

        // Validation zod
        const { error } = validateAllergenes.validate({ nom });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const affectedRows = await model.updateAllergenesById(id, nom);

        if (!affectedRows) {
            return res.status(404).json({ message: 'allergenes introuvables' });
        }

        res.json({ message: 'Allergenes mise à jour avec succès' });

    } catch (error) {
        console.error('Erreur updateAllergenesById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la mise à jour des allergenes' });
    }
};

// Pour supprimer un allergene par ID

export const deleteAllergenesById = async (req, res) => {
    try {
        const { id } = req.params;

        const affectedRows = await model.deleteAllergenesById(id);

        if (!affectedRows) {
            return res.status(404).json({ message: 'Allergenes introuvables' });
        }

        res.json({ message: 'Allergenes supprimées avec succès' });

    } catch (error) {
        console.error('Erreur deleteAllergenesById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la suppression des allergenes' });
    }
};

