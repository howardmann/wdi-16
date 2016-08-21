require 'pry'
require 'rainbow'

# Ruby File class Syntax
# File.open( "file_name", "mode")
# modes include ("r": read, "w": write etc.)
# Must remember to close file because Ruby can only handle a certain number of opened files

our_file = File.open( "people.txt", "r" ) # Open file
# p our_file

# Ruby remembers its place in the file
first_line = our_file.readline
# p first_line

second_line = our_file.readline
# p second_line

our_file.rewind # Moves back to the top of the file
all_lines = our_file.readlines

# puts all_lines
all_lines.each_with_index do |el, i|
  puts Rainbow("Line #{i+1}: #{el}").bg(:chartreuse).hotpink
end

p all_lines.length


our_file.close # Close file
# Must remember to close file

# Example our_file with mode: a+ (append mode, able to add)
our_file = File.open "people.txt", "a+"

our_file.puts Rainbow("Person 1").bg(:red)
our_file.puts Rainbow("Person 2").bg(:red)
our_file.puts Rainbow("Person 3").bg(:red)
our_file.puts Rainbow("THIS IS THE NEW END OF THE FILE").bg(:hotpink)

our_file.rewind
p our_file.readlines.last


our_file.close
