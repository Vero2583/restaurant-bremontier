import * as model from '../models/menus.model.js'
import { menusSchema } from '../validations/menus.validation.js'


// Récupérer toutes les menus

export const getMenus = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les menus
        const menus = await model.getMenus();

        // Envoi des menus au client
        res.json(menus);

    } catch (error) {
        console.error(' Erreur getMenus :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des menus' });
    }
};

// Pour créer un nouveau menus

export const createMenus = async (req, res) => {
    try {
        // Structure du body
        const { titre, prix, texte } = req.body;
        

        // Validation via Joi
        const { error } = menusSchema.validate({ titre, prix, texte });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer des menus
        await model.createMenus({ titre, prix, texte });

        // Réponse succès
        res.status(201).json({ message: 'Menus créées' });

    } catch (error) {
        console.error(' Erreur createMenus :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des menus' });
    }
};


// Pour récupérer menus par Id

export const getMenusById = async (req, res) => {
    try {
        const { id } = req.params;

        const menus = await model.getMenusById(id);

        if (!menus) {
            return res.status(404).json({ message: 'menus introuvables' });
        }

        res.json(menus);

    } catch (error) {
        console.error('Erreur getMenusById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des menus' });
    }
};

// Mettre à jour des menus par id 

export const updateMenusById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingMenus = await model.getMenusById(id)

        if(!existingMenus) {
            return res.status(404).json({message: 'Menus introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            titre: req.body.titre ?? existingMenus.titre,
            prix: req.body.prix ?? existingMenus.prix,
            texte: req.body.texte ?? existingMenus.texte
        }

        // valdiation avec joi

        const { error } = menusSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateMenusById(id, updatedData);

        res.json({ message: 'Menus mis à jour' });

    } catch (error) {
        console.error('Erreur updateMenusById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer des menus par id 

export const deleteMenusById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteMenusById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Menus introuvable' });
        }

        res.json({ message: 'Menus supprimée' });

    } catch (error) {
        console.error('Erreur deleteMenusById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};




 
