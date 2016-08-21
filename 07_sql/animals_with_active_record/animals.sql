-- create animals database workflow

-- Columns we want in the database
  -- table names are always plural - animals
  -- id as INTEGER PRIMARY KEY AUTOINCREMENT
  -- species as TEXT
  -- image as TEXT
  -- description as TEXT

-- Create table

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species TEXT,
  image TEXT,
  description TEXT
);
