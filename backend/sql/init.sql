--Création de la base de données:

CREATE DATABASE IF NOT EXISTS restaurant_bremontier
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci ;

USE restaurant_bremontier;

--Créations des tables:

CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  prenom VARCHAR(255),
  email VARCHAR(255) DEFAULT NULL UNIQUE,
  password_hash VARCHAR(255) DEFAULT NULL,
  role ENUM('USER','ADMIN','MODERATOR') NOT NULL DEFAULT 'USER',
  is_verified BOOLEAN DEFAULT FALSE,
  verify_token VARCHAR(50) DEFAULT NULL,
  reset_token VARCHAR(50) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON   UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_verify_token (verify_token),
  INDEX idx_reset_token (reset_token)
);

CREATE TABLE reservations(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  prenom VARCHAR(255),
  email VARCHAR(255) DEFAULT NULL UNIQUE,
  nombre DECIMAL(4.2),
  date DATETIME,
  message LONGTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE images(
  id INT PRIMARY KEY AUTO_INCREMENT,
  image VARCHAR(255)
);

CREATE TABLE allergenes(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255)
);

CREATE TABLE entrees(
  id INT PRIMARY KEY AUTO_INCREMENT,
  image_id INT,
  nom VARCHAR(255),
  prix DECIMAL(4.2),
  appartient_carte BOOLEAN
);

CREATE TABLE plats(
  id INT PRIMARY KEY AUTO_INCREMENT,
  image_id INT,
  nom VARCHAR(255),
  prix DECIMAL(4.2),
  appartient_carte BOOLEAN
);

CREATE TABLE desserts(
  id INT PRIMARY KEY AUTO_INCREMENT,
  image_id INT UNIQUE,
  nom VARCHAR(255),
  prix DECIMAL(4.2),
  appartient_carte BOOLEAN
);

CREATE TABLE boissons(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  prix DECIMAL(4.2),
  contient_alcool BOOLEAN
);

CREATE TABLE menus(
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(255),
  prix DECIMAL(4.2),
  texte TEXT
);

--Créations des tables de laisons:
--En sql il n'ya pas de relation many to many donc il faut créer des tables de relations

CREATE TABLE allergenes_entrees(
entrees_id INT NOT NULL UNIQUE,
allergenes_id INT NOT NULL UNIQUE,
FOREIGN KEY(entrees_id)REFERENCES entrees(id),
FOREIGN KEY(allergenes_id)REFERENCES allergenes(id)
);

CREATE TABLE allergenes_plats(
plats_id INT NOT NULL UNIQUE,
allergenes_id INT NOT NULL UNIQUE,
FOREIGN KEY(plats_id)REFERENCES plats(id),
FOREIGN KEY(allergenes_id)REFERENCES allergenes(id)
);
CREATE TABLE allergenes_desserts(
desserts_id INT NOT NULL UNIQUE ,
allergenes_id INT NOT NULL UNIQUE,
FOREIGN KEY(desserts_id)REFERENCES desserts(id),
FOREIGN KEY(allergenes_id)REFERENCES allergenes(id)
);

CREATE TABLE allergenes_boissons(
boissons_id INT NOT NULL UNIQUE,
allergenes_id INT NOT NULL UNIQUE,
FOREIGN KEY(boissons_id)REFERENCES boissons(id),
FOREIGN KEY(allergenes_id)REFERENCES allergenes(id)
);

CREATE TABLE allergenes_menus(
menus_id INT NOT NULL UNIQUE,
allergenes_id INT NOT NULL UNIQUE,
FOREIGN KEY(menus_id)REFERENCES menus(id),
FOREIGN KEY(allergenes_id)REFERENCES allergenes(id)
);

CREATE TABLE menus_entrees(
menus_id INT NOT NULL UNIQUE,
entrees_id INT NOT NULL UNIQUE,
FOREIGN KEY(menus_id)REFERENCES menus(id),
FOREIGN KEY(entrees_id)REFERENCES entrees(id)
);

CREATE TABLE menus_plats(
menus_id INT NOT NULL UNIQUE,
plats_id INT NOT NULL UNIQUE, 
FOREIGN KEY(menus_id)REFERENCES menus(id),
FOREIGN KEY(plats_id)REFERENCES plats(id)
);

CREATE TABLE menus_desserts(
menus_id INT NOT NULL UNIQUE,
desserts_id INT NOT NULL UNIQUE,
FOREIGN KEY(menus_id)REFERENCES menus(id),
FOREIGN KEY(desserts_id)REFERENCES desserts(id)
);

CREATE TABLE menus_boissons(
menus_id INT NOT NULL UNIQUE,
boissons_id INT NOT NULL UNIQUE,
FOREIGN KEY(menus_id)REFERENCES menus(id),
FOREIGN KEY(boissons_id)REFERENCES boissons(id)
);
