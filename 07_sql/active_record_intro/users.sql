-- Model || class named User
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  description TEXT
);


-- SEEDING THE DATABASE TO CHECK EVERYTHING WORKS
INSERT INTO users (first_name, last_name, username, description) VALUES ("Bill", "Murray", "bob", "awesome dude");

INSERT INTO users (first_name, last_name, username, description) VALUES ("Nick", "Cage", "cagerage", "maniac who owes tax");

INSERT INTO users (first_name, last_name, username, description) VALUES ("Harpo", "Marx", "funnyman", "vaudeville giant");
