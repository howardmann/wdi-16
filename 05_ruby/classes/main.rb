# RUBY CLASSES
require 'pry'

# Create a blueprint
class Person
  attr_accessor :name, :gender, :age

  def initialize(name,gender,age)
    @name = name
    @gender = gender
    @age = age
  end

  # def name=( name )
  #   @name = name
  # end
  #
  # def name
  #   @name
  # end
  #
  # def gender=( gender )
  #   @gender = gender
  # end
  #
  # def gender
  #   @gender
  # end

  def an_instance_method
    puts "I am an instance method"
  end

  def self.a_class_method
    puts "I am a class method"
  end

end

# Create an instance of a class
# p1 = Person.new
# p1.name=("Jane")
# p p1.name()
# p1.gender=("Female")
# p p1.gender()
# p1.an_instance_method
# Person.a_class_method

p1 = Person.new("Jane","Female",42)
p p1.name()
p p1.gender()
p p1.age()


# RUBY CLASS INHERITANCE

class Vehicle
  def generic_vehicle_stuff
  end
end

class Boat < Vehicle
  def specific_boat_stuff
  end
end

v = Vehicle.new
b= Boat.new
