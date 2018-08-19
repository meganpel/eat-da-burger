
DROP DATABASE IF EXISTS eatburger;
CREATE DATABASE eatburger;
USE eatburger;

CREATE TABLE burgers (
  id int(11) unsigned NOT NULL AUTO_INCREMENT,
  burger_name varchar(128),
  devoured tinyint(1),
  PRIMARY KEY (id)
);