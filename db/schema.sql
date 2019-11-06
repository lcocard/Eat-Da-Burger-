-- Drops the burger if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOL DEFAULT false,
  PRIMARY KEY (id)
);