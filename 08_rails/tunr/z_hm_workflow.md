#WORKFLOW
1. Draw out on paper model relationships
  - Find out has_many and belongs_to associations
2. Find out the central model which most interact with and then create model
  - terminal: ``` rails g model Song ```
  - in migrate create table folder add id associations ``` t.integer :album_id```
  - terminal: ``` rake db:migrate ```
3. Create new association ```rails g model Album```
4. Create association between two in model
  - Song belongs_to :artist; has_many :songs


# RAILS MIGRATIONS
- First create a database and schema 'development.sqlite3'
  - rake db:create
- Only do rails migrations if we want to create a new table or alter a table
  - rails g migration CreateKittens: will create a migration file and put it in migrate folder. Plural is important, if you write Kittens it will create a table named kittens
  - rails g model Kittens -> will create a
- Modify migration file
  - rails g migration AddLegsToKittens legs:integer

- Rename column name
  - rails g migration RenameLegsToLimbsInPuppies
  - def change rename_column :puppies, :legs, :limbs

- rake db:drop and delete files
- rails destroy model Kittens -> reverses your model
- rails destroy migration AddLegsToKittens

# PRO TIP
- rails g model Puppies -p
  - This will pretend and show what it would do

- rake -T
  - Run in terminal to find out rake tasks


# FLASH SESSION PARAMS @
- params[:id]
