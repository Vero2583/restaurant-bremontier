# restaurant-bremontier
projet stage 10 semaines

# Arborescences :
Backend/
  |_src/
    |_config/
     	    |_db.js
          |_mailer.js
    |_controllers/
	    |_auth.controller.js
          |_allergenes.controller.js
	    |_menus.controller.js
	    |_reservations.controller.js
          |_entrees.controller.js
          |_plats.controller.js
          |_desserts.controller.js
	    |_boissons.controller.js
    |_middlewares/
          |_auth.middleware.js
          |_upload.middleware.js
          |_allergenes.middleware.js
	    |_menus.middleware.js
	    |_reservations.middleware.js
          |_entrees.middleware.js
          |_plats.middleware.js
          |_desserts.middleware.js
	    |_boissons.middleware.js
          |_validation.middleware.js
    |_models/
          |_auth.model.js
	    |_allergenes.model.js
          |_menus.model.js
	    |_reservations.model.js
          |_entrees.model.js
          |_plats.model.js
          |_desserts.model.js
	    |_boissons.model.js
    |_routes/
          |_auth.route.js
          |_allergenes.route.js
	    |_menus. route.js
	    |_reservations.route.js
          |_entrees.route.js
          |_plats.route.js
          |_desserts.route.js
	    |_boissons.route.js
   |_app.js
   |_server.js
|_.env


# Installations des dépendances:

# Pour installer node_modules :
    npm init -y
# Installation de yarn
    npm install yarn
# Les autres dépendances pour le site :
yarn add express mysql2 argon2 cors nodemailer dotenv helmet uuid zod multer jsonwebtoken nodemon cors

# Explications des dépendances : 

Express : Sert à créer un serveur web et des API en Node.js.
helmet : Sert à sécuriser une app Express en ajoutant des en-têtes http.
Mysql2 : Permet de se connecter à une base de données MySql et d’exécuter des requêtes SQL.
argon2 : Sert hasher et vérifier les mots de passe de manière sécurisée. 
Cors : autorise le frontend à appeler le backend.
nodemailer : Sert à envoyer des emails depuis une application Node.js. ex : Brevo. 
dotenv : Permet d’utiliser des variables d’environnement secrètes.
uuid : Sert à générer des identifiants uniques. Pour tokens aléatoires. 
Zod (ou Joi) : sert à vérifier que les données envoyées par l’utilisateur sont correctes. Pour validation stricte des inputs. 
multer : Permet de gérer l’envoi de fichiers (image, pdf, etc..) depuis un formulaire.
jsonwebtoken : Sert à gérer l’authentification avec des Tokens JWT. 
nodemon : Redémarre le serveur automatiquement quand tu modifies le code (ne prend pas en compte les modifications du fichier.env).

