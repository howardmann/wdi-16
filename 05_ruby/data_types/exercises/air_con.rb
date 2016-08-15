# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

puts "Enter the current temperature:"
current_temp = gets.chomp.to_f
puts "Is the A/C functional (y or n)"
functional = gets.chomp
puts "Enter the desired temperature:"
desired_temp = gets.chomp.to_f

if functional == 'y' && current_temp > desired_temp
  puts "Turn on the A/C Please"
elsif functional == 'n' && current_temp > desired_temp
  puts "Fix the A/C now! It's hot!"
elsif functional == 'n' && current_temp < desired_temp
  puts "Fix the A/C whenever you have the chance...It's cool..."
end
