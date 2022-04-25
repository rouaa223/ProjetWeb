CREATE DATABASE IF NOT EXISTS projectbase;
USE projectbase;
DROP TABLE IF EXISTS visiteur;
CREATE TABLE visiteur (
  idvisiteur INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomvisiteur VARCHAR(45),
  prenomvisiteur VARCHAR(45),
  emailvisiteur VARCHAR(45),
  pwdvisiteur VARCHAR(45));


DROP TABLE IF EXISTS produit;
CREATE TABLE produit (
  idproduit INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomproduit VARCHAR(45),
  description VARCHAR(10000),
  stock INT);

DROP TABLE IF EXISTS commande;
CREATE TABLE commande(
  idcommande INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  datecommande DATE,
  quantité INT,
  localisation VARCHAR(45),
  idvisiteur INT NOT NULL,
  idproduit INT NOT NULL,
  idtourne INT NOT NULL,
  FOREIGN KEY(idtourne) REFERENCES tourne(idtourne),
  FOREIGN KEY(idvisiteur) REFERENCES visiteur(idvisiteur),
  FOREIGN KEY(idproduit) REFERENCES produit(idproduit));



DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  idemployee INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomEmp VARCHAR(45),
  prenomEmp VARCHAR(45),
  emailEmp VARCHAR(45),
  pwdEmp VARCHAR(45));



DROP TABLE IF EXISTS tourne;
CREATE TABLE tourne (
  idtourne INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  datelivraison DATE,
  destination VARCHAR(45));


DROP TABLE IF EXISTS gestionproduit;
CREATE TABLE gestionproduit(
idproduit INT NOT NULL,
idemployee INT NOT NULL,
PRIMARY KEY(idproduit,idemployee),
FOREIGN KEY(idproduit) REFERENCES produit(idproduit),
FOREIGN KEY(idemployee) REFERENCES employee(idemployee));


INSERT INTO employee(nomEmp,prenomEmp,emailEmp,pwdEmp) values ('daas','ala','aladaas@istic.org','alaa');
INSERT INTO employee(nomEmp,prenomEmp,emailEmp,pwdEmp) values ('ben hamouda','mayssem','mayssem@istic.org','mayssem');
INSERt INTO visiteur (nomvisiteur,prenomvisiteur,emailvisiteur,pwdvisiteur) values ('mahmoudi','rouaa','mahmoudiroua8@gmail.com','azerty');
INSERt INTO visiteur (nomvisiteur,prenomvisiteur,emailvisiteur,pwdvisiteur) values ('chakroun','eya','eyachakroun@yahoo.fr','123456789');
INSERT INTO produit (nomproduit,description,stock) values ('rose','the beautiful rose has attained cultural significance around the world and is often used to symbolise love affection and beauty',20);
INSERT INTO produit (nomproduit,description,stock) values ('Tulip','tulips have been seen as a symbol of wealth and abundance through the ages',30);
INSERt INTO commande (datecommande,quantité,localisation,idtourne,idvisiteur,idproduit) values ('2022-03-30',10,'tunis',1,1,2);
INSERt INTO commande (datecommande,quantité,localisation,idtourne,idvisiteur,idproduit) values ('2022-04-11',2,'manouba',1,2,1);
INSERT INTO tourne (datelivraison,destination) values ('2022-05-01','tunis');
INSERT INTO tourne (datelivraison,destination) values ('2022-04-22','manouba');
