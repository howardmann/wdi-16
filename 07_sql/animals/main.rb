require 'pry'
require 'sqlite3' # Gem which allows us to use sql in pry
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "Hello World"
  erb (:home)
end


get '/animals' do
  # 1. Create database.db file connection to ruby sqlite3 gem which will allow us to write SQL with Ruby. Store results in variable db
  db = SQLite3::Database.new("database.db")

  # 2. Use gem built-in method .results_as_hash to convert array values to Ruby hash
  db.results_as_hash = true

  # 3. Run .execute method now on db variable to run SQL code to access values in database and store in ruby variable. Use @ prefix to give global scope
  @all_animals = db.execute "SELECT * FROM animals;"

  erb (:animals_index)
end

#HM!!: This needs to be above dunamic route, otherwise :id will match
get '/animals/new' do
  erb (:animals_new)
end

post '/animals' do
  # Make a connection to the database with 2 lines of code below
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  # Need to create something with SQL
  # INSERT INTO table_name (species, image, description) VALUES ("","","")
  # We need to use interpolation because we are writing it into a string for db to execute
  sql = "INSERT INTO animals (species, image, description) VALUES ('#{params[:species]}','#{params[:image]}','#{params[:description]}');"

  db.execute sql
  db.close

  redirect "/animals"
end

post '/animals/:id' do
  # Write SQL update string in syntax UPDATE table_plural SET column1 = 'value', column2 = 'value' WHERE id == 1;
  sql = "UPDATE animals SET species='#{params[
  :species]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  db.execute sql
  db.close

  redirect "/animals/#{params[:id]}"
end

# This must come before the get :id route. Remember post goes above
get '/animals/:id/edit' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]}" )[0]
  db.close
  erb (:animals_edit)
end

get '/animals/:id/delete' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  sql = "DELETE FROM animals WHERE id == #{params[:id]};"

  db.execute sql
  db.close

  redirect "/animals"
end

get '/animals/:id' do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  # Runs SQL code to select all animals where id == params[:id]. Will output the value in an array with one hash object. Then select index position of [0] to get access to that hash
  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]}" )[0]
  db.close
  erb :animals_show
end
