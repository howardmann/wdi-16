require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

# Any SQL which gets executed logs to the terminal
ActiveRecord::Base.logger = Logger.new( STDERR )

# users table -> class User
# ActiveRecord gem links to the users.sql CREATE TABLE file to link all the column properties to the class User
class User < ActiveRecord::Base
end

# READ STEP
p all_users = User.all
first_user = User.first
last_user = User.last

user_with_id_2 = User.find( 2 )

bill = User.find_by({
  :first_name => "Bill",
  :last_name => "Murray"
})

all_bill = User.where({
  :first_name => "Bill"
})

# CREATE STEP
jacques = User.new
jacques.first_name = "Jacques"
jacques.last_name = "Cousteau"
jacques.username = "jacques"
jacques.description = "Explorer"
jacques.save # Must always call .save if adopting the User.new approach

p User.find_by ( {:first_name => "Jacques"} )

groucho = User.create({
  :first_name => "Groucho",
  :last_name => "Marx",
  :username => "grouchy",
  :description => "I am Groucho Marx"
})

p User.find_by( :first_name => "Groucho" )
p all_users.length

# UPDATE STEP
groucho = User.find_by ( {:last_name => "Marx"} )
groucho.first_name = "Changed"
groucho.save # Remember to save

jacques = User.find_by :first_name => "Jacques"
jacques.update :description => "EXPLORER"

# DELETE STEP
donald = User.create({
  :first_name => "Donald",
  :last_name => "Trump",
  :username => "evil",
  :description => "MAkE IT HUUUGE"
})

donald.destroy
