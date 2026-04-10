import mysql from "mysql2/promise";
import "dotenv/config";

// connection à la base de donées

let db;

try {
   db= mysql.createPool({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
   });
   await db.getConnection();
   console.log(`connexion à la base de données ${process.env.DB_NAME} réussie`); 
} catch (error) {
    console.log('Erreur lors de la connexion à la base de données', error.message)
    process.exit(1)
}

export {db}

