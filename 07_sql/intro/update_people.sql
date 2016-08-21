-- Update people
-- sqlite3 database.db < update_people.sql
-- !!!!!HM: IMPORTANT: REMEMBER TO FINISH WITH WHERE OR IT WILL BREAK

UPDATE people SET first_name = "Chicho" WHERE id == "1";

UPDATE people SET first_name = "Harpo", last_name = "MARX" WHERE id == "2";
