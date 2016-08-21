-- sql read syntax
-- sqlite3 database.db < read_people.sql
-- Links this sql code below and executes in terminal

SELECT * FROM people; -- Get all records and attributes from table

SELECT first_name FROM people; -- Select just the first name attributes

SELECT first_name, last_name FROM people; -- Select just first_name and last_name from people table

SELECT * FROM people WHERE first_name == "Groucho"; -- Select all attributes from people table where first_name equals "Groucho"

SELECT * FROM people WHERE id == 3;

SELECT * FROM people WHERE first_name == "Groucho" AND last_name == "Marx"; -- Can use and statements to combine search conditions
