-- terminal command to import create_people.sql file to database.db
-- sqlite3 database.db < create_people.sql
-- sqlite3 database.db
  -- .schema (to show what was imported into the database.db file) 

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);
