# Ruby METHODS

# Syntax

def hello
  puts "Hello"
end
hello()

def say_hello( name = "World" )
  puts "Hello #{name}"
end
say_hello("Badger")
say_hello() # Calls on default value

# Multiple method parameters

def add_two_numbers( x, y )
  puts x + y
end
add_two_numbers(10,20)

# HM: Ruby implicit return. Last line is returned so long as it isn't prefixed with a puts or p

def multiply_two_numbers( x, y )
  x * y
end
p multiply_two_numbers(2,3)
result = multiply_two_numbers(2,2)
p result

# return works the same as JavaScript
def say_hi( name = "World" )
  return "rude"
  "Hello #{name}"
end
p say_hi
p say_hi("Serge")
p say_hi "Jane"
