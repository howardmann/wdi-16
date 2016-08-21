require 'pry'

# Open movie_database file in read only mode
f = File.open "movie_database.txt", "r"
all_lines = f.readlines # Create an array of every line in the file

# New method to print out every line
def display_movie( line )
  # Print each line and delete closing \n tag destructively !
  line.chomp!
  # Split the line into an array where it is separated by a comma
  movie_details = line.split(",")
  # Store the array vlues into relevant variables
  movie_name = movie_details[0]
  movie_duration = movie_details[1]
  movie_rating = movie_details[2]

  puts ""
  p movie_details # Print out array

  puts "Name: #{movie_name}"
  puts "Duration: #{movie_duration}"
  puts "Rating: #{movie_rating}"
end

# Run each block to print out every line
all_lines.each do |el|
  display_movie( el )
end

f.close # Remember to close your files

def add_movie
  puts "Time to add a movie!"
  print "What is the movie name?"
  name = gets.chomp

  print "How long is it?"
  duration = gets.chomp

  print "What is the rating?"
  rating = gets.chomp

  movie_details = "#{name},#{duration},#{rating}"

  # Open the file again with append rights
  f = File.open "movie_database.txt", "a+"
  f.puts movie_details
  f.close # Remember to close
end

# add_movie()
