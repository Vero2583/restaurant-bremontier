import * as model from '../models/boissons.model.js'
import { boissonsSchema } from '../validations/boissons.validation.js'


// Récupérer toutes les boissons

export const getBoissons = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les boissons
        const boissons = await model.getBoissons();

        // Envoi des boissons au client
        res.json(boissons);

    } catch (error) {
        console.error(' Erreur getBoissons :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des boissons' });
    }
};

// Pour créer un nouveau boissons

export const createBoissons = async (req, res) => {
    try {
        // Structure du body
        const { nom, prix, contient_alcool } = req.body;
        

        // Validation via Joi
        const { error } = boissonsSchema.validate({ nom, prix, contient_alcool});
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer des boissons
        await model.createBoissons({ nom, prix, contient_alcool });

        // Réponse succès
        res.status(201).json({ message: 'Boissons créées' });

    } catch (error) {
        console.error(' Erreur createboissons :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des boissons' });
    }
};


// Pour récupérer boissons par Id

export const getBoissonsById = async (req, res) => {
    try {
        const { id } = req.params;

        const boissons = await model.getBoissonsById(id);

        if (!boissons) {
            return res.status(404).json({ message: 'boissons introuvables' });
        }

        res.json(boissons);

    } catch (error) {
        console.error('Erreur getBoissonsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des boissons' });
    }
};

// Mettre à jour des boissons par id 

export const updateBoissonsById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingBoissons = await model.getBoissonsById(id)

        if(!existingBoissons) {
            return res.status(404).json({message: 'Boissons introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            nom: req.body.nom ?? existingBoissons.nom,
            prix: req.body.prix ?? existingBoissons.prix,
            contient_alcool: req.body.texte ?? existingBoissons.contient_alcool
        }

        // valdiation avec joi

        const { error } = boissonsSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateBoissonsById(id, updatedData);

        res.json({ message: 'Boissons mis à jour' });

    } catch (error) {
        console.error('Erreur updateBoissonsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer des boissons par id 

export const deleteBoissonsById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteBoissonsById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Boissons introuvable' });
        }

        res.json({ message: 'Boissons supprimée' });

    } catch (error) {
        console.error('Erreur deleteBoissonsById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};




 
