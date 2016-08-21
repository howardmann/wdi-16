-- Delete step
-- sqlite3 database.db < delete_people.sql

-- Insert new people to delete
INSERT INTO people (id, first_name, last_name) VALUES (4, "Small", "Person");
INSERT INTO people (id, first_name, last_name) VALUES (5, "Big", "Person");
INSERT INTO people (id, first_name, last_name) VALUES (6, "Medium", "Person");

-- !!!! HM WARNING!!! REMEMBER == sign IF YOU USE = IT WILL DELETE EVERYTHING
DELETE FROM people WHERE id == 4;
DELETE FROM people WHERE first_name == "Big";
DELETE FROM people WHERE first_name == "Medium" AND last_name == "Person";
