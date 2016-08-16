# # Pling Plang Plong
#
# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a factor, simply return the
# string representation of the number itself.
#
# E.g.
#
# The number 28 is divisible by 7, so...
#
# ```
# # => "Plong"
# ```
#
# The number 1755 is divisible by 3 and 5, so...
#
# ```
# # => "PlingPlang"
# ```
#
# The number 34 is not divisible by 3,5 or 7, so...
#
# ```
# # => "34"

def raindrop(number)

  if number % 3 != 0 && number % 5 != 0 && number % 7 != 0
    p number.to_s
  else
    arr = []
    arr.push("Pling") if number % 3 == 0
    arr.push("Plang") if number % 5 == 0
    arr.push("Plong") if number % 7 == 0
    p arr.join('')
  end

end

raindrop(3)
raindrop(5)
raindrop(21)
raindrop(35)
raindrop(34)

# Badger warm_up walkthrough
def plongers(num)
  str = ""

  # if num % 3 == 0
  #   str += "Pling"
  # end
  # if num % 5 == 0
  #   str += "Plang"
  # end
  # if num % 7 == 0
  #   str += "Plong"
  # end
  #
  # if str.empty?
  #   return num.to_s
  # else
  #   return str
  # end

  # Ruby shorthand
  str << "Pling" if num % 3 == 0
  str << "Plang" if num % 5 == 0
  str << "Plong" if num % 7 == 0

  return str unless str.empty?
  num.to_s
end


puts plongers(3)
puts plongers(5)
puts plongers(7)
puts plongers(105)
puts plongers(34)
