import * as model from '../models/entrees.model.js'
import * as allergenesmodel from '../models/allergenes.model.js'
import {entreesSchema} from '../validations/entrees.validation.js'



// Pour créer les entrees 
 
export const createEntrees = async (req, res) => {
    try {
        // Structure du body

        const { id, nom, prix, appartient_carte, allergenes, image_id } = req.body;
        
        
        // Validation via Joi

        const { error } = entreesSchema.validate({ nom, prix, image_id });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer les entrees

        const entrees = await model.createEntrees({ nom, prix, appartient_carte });
        const entrees_id = entrees.insertId 
        console.log(entrees_id)

         for (const allergene of allergenes) {
            console.log(allergene)
        await allergenesmodel.addAllergenesEntrees(allergene, entrees_id)
    }


        // Réponse succès
        res.status(201).json({ message: 'Entrees créées' });

    } catch (error) {
        console.error(' Erreur createEntrees :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des entrees' });
    }
};

// Pour récupérer toutes les entrees
export const getEntrees = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les entrees
        const annonces = await model.getEntrees();

        // Envoi des annonces au client
        res.json(entrees);

    } catch (error) {
        console.error(' Erreur getEntrees :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des entrees' });
    }
};

// Récupérer des entrees par ID
 
export const getEntreesById = async (req, res) => {
    try {
        const { id } = req.params;

        const entrees = await model.getEntreesById(id);

        if (!entrees) {
            return res.status(404).json({ message: 'Entrees introuvables' });
        }

        res.json(entrees);

    } catch (error) {
        console.error('Erreur getEntreesById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Mettre à jour une annonce par ID

export const updateEntreesById = async (req, res) => {
    try {
        const { id } = req.params;
        const image = req.file ? req.file.filename : undefined;

        const existingEntrees = await model.getEntreesById(id);

        if (!existingEntrees) {
            return res.status(404).json({ message: 'Entrees introuvables' });
        }

        // Champs updatables uniquement
        const updatedData = {
            nom: req.body.nom ?? existingEntrees.nom,
            prix: req.body.prix ?? existingEntrees.prix,
            image: image ?? existingEntrees.image
        };

        // Validation Joi
        const { error } = entreesSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateAnnonceById(id, updatedData);

        res.json({ message: 'Entrees mise à jour' });

    } catch (error) {
        console.error('Erreur updateEntreesById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer une annonce par ID
 
export const deleteEntreesById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteEntreesById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Entrees introuvables' });
        }

        res.json({ message: 'Entrees supprimées' });

    } catch (error) {
        console.error('Erreur deleteEntreesById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};