### Schema

CREATE DATABASE users_db;

USE users_db;

CREATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(40) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE contacts
(
	id int NOT NULL AUTO_INCREMENT,
	childcare_contact1_name varchar(40) NOT NULL,
	childcare_contact1_email varchar(50) NOT NULL,
	childcare_contact1_phone int NOT NULL,
	client_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);