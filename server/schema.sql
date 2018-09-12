CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT(9) AUTO_INCREMENT,
  username VARCHAR(32),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT(9) AUTO_INCREMENT,
  txt TEXT,
  roomname VARCHAR(16),
  objectid VARCHAR(40),
  user_id INT(9),
  room_id INT(9),
  PRIMARY KEY (id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
