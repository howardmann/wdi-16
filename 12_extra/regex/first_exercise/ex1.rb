require 'pry'

# Run in terminal: ruby ex1.rb flintstones.txt
# ARGF is a special variable given to Ruby files that stores arguments - in this case the flintstones.txt file
ARGF.each do |line|
  if line =~ /fred/
    puts line
  end
end
