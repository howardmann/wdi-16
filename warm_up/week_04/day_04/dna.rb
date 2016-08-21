# # Nucleotide Count
#
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# So back to DNA.
#
# Write a program that will tell you how many times each nucleotide occurs in a string.
#
# It should also tell you if a character in the string is _not_ a valid nucleotide.


def dna (string)
  arr = string.upcase.split('')
    
  a = (arr.select {|el| el == "A"}).length
  c = (arr.select {|el| el == "C"}).length
  g = (arr.select {|el| el == "G"}).length
  t = (arr.select {|el| el == "T"}).length

  puts "\nDNA check: '#{string}' "
  unless (a+c+g+t == 0)
    puts "A: #{a} \nC: #{c} \nG: #{g} \nT: #{t}"
  else
    puts "Not a valid nucleotide"
  end
end

dna("cabbage")
dna("pp")
