#  Ruby LOOPS

# while loop

i = 0
while i <= 5
  puts "I: #{i}"
  i += 1
end

i = 5
while i>=0
  puts "I: #{i}"
  i -= 1
end

# iterator loop

5.times do |i|
  puts "#{i}: wow"
end

10.downto(4) do |i|
  puts "down to #{i}"
end

8.upto(12) do |i|
  puts "up to #{i}"
end

# range

num_array = (1..10).to_a
p num_array

# For-in loop  Note: less commonly used

for num in 1..10
  p "For-in: #{num}"
end

# Generating random numbers

p Random.rand(1..3)
p Random.rand(1..10)
p Random.rand() 
