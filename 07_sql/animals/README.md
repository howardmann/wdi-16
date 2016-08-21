# Approach

1) Create database files in terminal and link to sqlite3
  - touch database.db     
  - sqlite3 database.db   # Link database.db to sqlite3  
  - touch animals.sql
    - CREATE TABLE ....(see next step)
  - sqlite3 database.db
    - .schema

2) CREATE TABLE
- In animals.sql file create table with syntax below
  ```
  CREATE TABLE plural_name (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    column_name_one TEXT,
    column_name_two TEXT,
    column_name_two TEXT
  );

  ```
- Link animals.sql file to database.db in terminal
  - sqlite3 database.db < animals.sql
