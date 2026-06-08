import * as model from '../models/contact.model.js'
import { contactSchema } from '../validations/contact.validation.js'



// Récupérer toutes les desserts

export const getContact = async (req, res) => {
    try {
        // Appel du modèle pour récupérer toutes les desserts
        const menus = await model.getContact();

        // Envoi des contacts
        res.json(desserts);

    } catch (error) {
        console.error(' Erreur getContact :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des contacts' });
    }
};

// Enregistrer un contact
export const createContact = async (req, res) => {
    try {
        // Structure du body
        const { nom, email, message } = req.body;
        

        // Validation via Joi
        const { error } = contactSchema.validate({ nom, email, message});
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer du contact
        const contact = await model.createContact({ nom, email, message });
        

        // Réponse succès
        res.status(201).json({ message: 'Contact créées' });

    } catch (error) {
        console.error(' Erreur createcontact :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des contacts' });
    }
};


// Pour récupérer contact par Id

export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;

        const contact = await model.getContactById(id);

        if (!contact) {
            return res.status(404).json({ message: 'contact introuvables' });
        }

        res.json(contact);

    } catch (error) {
        console.error('Erreur getContactById :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des contacts' });
    }
};

// Mettre à jour des contacts par id 

export const updateContactById = async (req, res) => {
    try {
        
        const {id} = req.params;

        const existingContact = await model.getContactById(id)

        if(!existingContact) {
            return res.status(404).json({message: 'Contact introuvable'})
        }

        // champs updatable uniquement

        const updatedData = {
            nom: req.body.nom ?? existingContact.nom,
            email: req.body.email ?? existingContact.email,
            message: req.body.message ?? existingContact.message
        }

        // valdiation avec joi

        const { error } = contactSchema.validate(updatedData);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        await model.updateContactById(id, updatedData);

        res.json({ message: 'Contact mis à jour' });

    } catch (error) {
        console.error('Erreur updateContactById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer un contact par id 

export const deleteContactById = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await model.deleteContactById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Contact introuvables' });
        }

        res.json({ message: 'Contact supprimées' });

    } catch (error) {
        console.error('Erreur deleteContactById :', error.message);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

