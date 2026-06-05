import * as model from '../models/contact.model'
import contactSchema from '../validations/contact.validation'



export const createContact = async (req, res) => {
    try {
        // Structure du body
        const { nom, email, message } = req.body;
        

        // Validation via Joi
        const { error } = contactSchema.validate({ nom, email, message});
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Appel du modèle pour créer des boissons
        const contact = await model.createContact({ nom, email, message });
        

        // Réponse succès
        res.status(201).json({ message: 'Contact créées' });

    } catch (error) {
        console.error(' Erreur createcontact :', error.message);
        res.status(500).json({ message: 'Erreur serveur lors de la création des contacts' });
    }
};