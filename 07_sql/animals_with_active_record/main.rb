require 'pry'
require 'sqlite3' # Gem which allows us to use sql in pry
require 'sinatra'
require 'sinatra/reloader'


# ActiveRecord::Base CODE.................................
# New code requirign the active record gem and establishing a connection with the sqlite3 gem and linking to the database.db file
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.db"
)
#HM! This code allows us to see sql printed in the terminal, very educational to help us see how Active::Record compiles SQL from Ruby
ActiveRecord::Base.logger = Logger.new( STDERR )

# HM!! This is Critical, for us to use ActivRecord we need to append it to RUby classes through syntax class Name < ActiveRecord::Base
# HM!!: bleongs_to and has_many references lowercase sql table so lower case :habitats and :animals
# HM!! THIS IS MAGIC. This then allows us to access the parent and child associations of each. e.g. @animal.habitat.landscape and then @habitat.animals.species
class Animal < ActiveRecord::Base
  # HM!! Plurals becomes very confusing. Databases are all named plural and lower case but when linking the Ruby class a belongs_to association is singular whilst a has_many association is plural THis is ActiveRecord magic
  belongs_to :habitat
end

class Habitat < ActiveRecord::Base
  has_many :animals
end
# ActiveRecord::Base CODE.................................

# Referencing ActiveRoecord

get '/' do
  "Hello World"
  erb (:home)
end

get '/habitats/new' do
  erb (:habitats_new)
end

post '/habitats' do
  Habitat.create({
    :landscape => params[:landscape],
    :climate => params[:climate]
  })
  redirect '/habitats'
end

get '/habitats' do
  @all_habitats = Habitat.all
  erb (:habitats_index)
end

get '/habitats/:id/edit' do
  @habitat = Habitat.find( params[:id] )
  erb (:habitats_edit)
end

post '/habitats/:id' do
  habitat = Habitat.find( params[:id] )
  habitat.update({
    :landscape => params[:landscape],
    :climate => params[:climate]
  })
  redirect "/habitats/#{habitat.id}"
end

get '/habitats/:id' do
  @habitat = Habitat.find ( params[:id] )
  erb (:habitats_show)
end

get '/habitats/:id/delete' do
  habitat = Habitat.find ( params[:id] )
  habitat.destroy
  redirect "/habitats"
end


# animals ............................

get '/animals' do
  @all_animals = Animal.all
  erb (:animals_index)
end

get '/animals/new' do
  erb (:animals_new)
end

post '/animals' do
# Option1
  # animal = Animal.new
  # animal.species = params[:species]
  # animal.image = params[:image]
  # animal.description = params[:description]
  # animal.save
# Option2
  Animal.create({
    :species => params[:species],
    :image => params[:image],
    :description => params[:description],
    :habitat_id => params[:habitat_id].to_i
  })

  # # Make a connection to the database with 2 lines of code below
  # db = SQLite3::Database.new("database.db")
  # db.results_as_hash = true
  # # Need to create something with SQL
  # # INSERT INTO table_name (species, image, description) VALUES ("","","")
  # # We need to use interpolation because we are writing it into a string for db to execute
  # sql = "INSERT INTO animals (species, image, description) VALUES ('#{params[:species]}','#{params[:image]}','#{params[:description]}');"
  #
  # db.execute sql
  # db.close

  redirect "/animals"
end

post '/animals/:id' do
  animal = Animal.find( params[:id] )
  animal.update ({
    :species => params[:species],
    :image => params[:image],
    :description => params[:description],
    :habitat_id => params[:habitat_id].to_i
  })
  # # Write SQL update string in syntax UPDATE table_plural SET column1 = 'value', column2 = 'value' WHERE id == 1;
  # sql = "UPDATE animals SET species='#{params[
  # :species]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"
  #
  # db = SQLite3::Database.new("database.db")
  # db.results_as_hash = true
  #
  # db.execute sql
  # db.close

  redirect "/animals/#{params[:id]}"
end

# This must come before the get :id route. Remember post goes above
get '/animals/:id/edit' do
  @animal = Animal.find params[:id]
  # db = SQLite3::Database.new("database.db")
  # db.results_as_hash = true
  # @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]}" )[0]
  # db.close
  erb (:animals_edit)
end

get '/animals/:id/delete' do
  animal = Animal.find( params[:id] )
  animal.destroy
  # db = SQLite3::Database.new("database.db")
  # db.results_as_hash = true
  #
  # sql = "DELETE FROM animals WHERE id == #{params[:id]};"
  #
  # db.execute sql
  # db.close

  redirect "/animals"
end

get '/animals/:id' do
  @animal = Animal.find params[:id]
  # db = SQLite3::Database.new("database.db")
  # db.results_as_hash = true
  # # Runs SQL code to select all animals where id == params[:id]. Will output the value in an array with one hash object. Then select index position of [0] to get access to that hash
  # @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]}" )[0]
  # db.close
  erb :animals_show
end


get '/pry' do
  binding.pry
end
