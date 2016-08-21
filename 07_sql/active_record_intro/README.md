# ActiveRecord gives us Ruby methods to write SQL

1. SETUP DATABASE: Require ActiveRecord and write dependancies (not really worth remembering):
  - touch three files:
    1. main.rb      => For scripts and execution of ActiveRecord and ruby
    2. users.sql    => For creating and initial seeding of sql table and code
    3. database.db  => For linking and storing users.sql script

  - In users.sql. Create database table, seed data and link to database.db at end sqlite3 database.db < users.sql:
  ```
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    description TEXT
  );

  INSERT INTO users (first_name, last_name, username, description) VALUES ("Bill", "Murray", "bob", "awesome dude");

  INSERT INTO users (first_name, last_name, username, description) VALUES ("Nick", "Cage", "cagerage", "maniac who owes tax");

  INSERT INTO users (first_name, last_name, username, description) VALUES ("Harpo", "Marx", "funnyman", "vaudeville giant");

  ```
2. SETUP ActiveRecord code:
  - In main.rb write code, establish connection with ActiveRecord:
    ```
    <!-- require both gems -->
    require 'active_record'
    require 'sqlite3'

    <!-- Establish connection linked to sqlite3 gem above -->
    ActivRecord::Base.establish_connection(
      :adapter => 'sqlite3',
      :database => 'database.db'
    )

    <!-- Prints to terminal the SQL code being compiled -->
    ActiveRecord::Base.logger = Logger.new( STDERR )
    ```

  - Create class of User which is linked to ActiveRecord. This will allow us to use Ruby to access the sql database properties of class User
  <!-- HM!! ActiveRecord is very smart it is able to auto link the class User with the table.name "users" in the database.db file. If you want to override this you can type in self.table_name = "legacy_db_name"; some more code is needed but this is not recommended -->
    ```
    class User < ActiveRecord::Base
    end
    ```

3. CREATE
  - Call on the class User created above and create an instance of User by using built-in Active::Record method create and passing in the relveant sql CREATE TABLE properties and assigning accordingly. Remember to store it in a variable for access
    ```
    groucho = User.create({
      :first_name => "Groucho",
      :last_name => "Marx",
      :username => "grouchy",
      :description => "vaudeville comedy"
    })
    ```

4. READ (HM: I haven't checked the SQL syntax, more for education)
  - Access all Users (SQL: SELECT * FROM users;)
    ```
    User.all
    all_users = User.all
    ```
  - Find user by id (SQL: SELECT * FROM users WHERE id == 1;)
    ```
    User.find(1)
    user_1 = User.find(1)
    ```
  - Find user by property (SQL: SELECT * FROM users WHERE 'first_name' == 'Groucho' && 'username' == 'grouchy';)
    ```
    User.find_by({
      :first_name => "Groucho",
      :username => "grouchy"
    })
    ```
  - Find all instances of a class (SQL: SELECT * FROM users WHERE 'first_name' == 'Bill';)
    ```
    User.where ({
      :first_name => "Bill"
    })
    ```
5. UPDATE
  - First find the user being updated, store in variable and then update
  ```
  nick = User.find_by({
    :first_name => "Nick",
    :last_name => "Cage"
  })
  ```
  - Update properties of found variable
  ```
  nick.update({
    :first_name => "Nicolas",
    :last_name => "Coppolla"
  })
  ```
6. DELETE
  - Easiest command, find variable and then call on destroy
  ```
  nick.destroy
  ```
