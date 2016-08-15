# Ruby printing to console ................................................

puts 'Hello World'  # On a separate line
puts 'Hello World'  # On the same line (avoid)
p "Hello World"     # Printing for programmers and will show data type


# Ruby Data Types ........................................................
# Strings
puts "Hello " + "Badger"  # Old JavaScript approach. Concatenation is still possible
puts "2 + 2 = #{2 + 2}"   # Using Ruby interpolation approach #{run Ruby code}
puts '2 + 2 = #{2 + 2}'   # Single quotes doesn't do interpolation

name = 'gilberto'         # Variables are stored with one equals sign (=) and no var prefix
drink = 'whiskey'

puts "Excuse me #{name.capitalize}, where is my #{drink.upcase}!!"    # Using interpolation to access variables and methods

# HM: Within pry or irb type String.methods.sort to access methods available to strings and then go to rubydocs to get description


# Numbers

puts 1.class    # Fixnum
puts 1.0.class  # Float
puts 100000000000000000000000.class # Bignum

puts 2**3       # 2^3

# Ruby Variables use snake-case syntax vs. JavaScript uses camelCase

this_is_a_variable = true
this_is_a_string = "Yep"
this_is_a_number = 10

# Ruby Getting user input (commented out for script)
# puts "What is your name?"
# user_name = gets.chomp    # Gets by default stores the string with a new line at the end \n. Chomp will delete the chomp
#
# p user_name

# Ruby Conditionals........................................................
# IF statement

if 42 > 13
  puts "42 is a bigger number"
end

name = "Groucho"
# If the name variable contains "Harpo", print out "Your name is Harpo"
# If the name variable contains "Chico", print out "Your name is Chico"
# Otherwise, print out "Hopefully you are Groucho"
if name == "Harpo"
  puts "Your name is Harpo"
elsif name == "Chico"
  puts "Your name is Chico"
else
  puts "Hopefully you are Groucho"
end

# Single line conditional approach. Try to use less of
puts "42 is bigger than 13" if 42 > 13
comfortable = true
puts "Return comfortable " if comfortable

# UNLESS statement. HM: Able to use != or unless, both interchangeable

# Not true IF statement
if "World" != "Hello"
  puts "Those things aren't equal"
end

unless "World" == "Hello"
  puts "Those things aren't equal"
end

unless true == false # if true != false
  puts "Whatever"
else
  puts "Something else"
end

# CASE statement

hour = 15

case
when hour < 12
  puts "Good morning"
when hour > 12 && hour < 17
  puts "Good afternoon"
else
  puts "Good evening"
end

# if hour < 12
#   puts "Good morning"
# elsif hour > 12 && hour < 17
#   puts "Good afternoon"
# else
#   puts "Good evening"
# end


name = "Badger"
case name
when "Wolf"
  puts "You are teaching"
when "Badger"
  puts "You are also teaching"
else
  puts "You are learning(hopefully)"
end

name = "Badger"
case name
when "Badger" then puts "You are Badger"
when "Wolf" then puts "You are teaching"
else
  puts "You are learning"
end

# puts "You are badger" if name == "Badger" #equivalent one line ruby if statement

name = "Badger"
role =  case name
        when "Badger" then "Developer in Residence"
        when "Wolf" then "Teacher (apparently)"
        else
          "Student"
        end
p role

# Storing conditional values in variable. Equivalent using if statement not case
role_if = if name == "Badger"
            "Developer in Residence"
          elsif name == "Wolf"
            "Teacher"
          else
            "Student"
          end
p role_if
