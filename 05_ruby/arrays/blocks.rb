#  Ruby BLOCKS

# Similar to JS anonymous interator functions


array = ["wolf","badger","blade"]

# ACCESSING ELEMENTS IN AN ARRAY.......................
# Printing out each arary. Non-destructive  approach
array.each do |el|
  p el
end

# Printing out with concatenation
array.each do |el|
  p "This is #{el}"
end

# JavaScript equivalent
# for ( var i = 0; i < array.length; i++ ) {
#   console.log(array[i]);
# }

# for ( var i = 0; i < array.length; i++ ) {
#   console.log("This is "+ array[i]);
# }

# Syntax HM note: each can take any custom array, and is non-destructive
# (any array).each do |el|
#   p "#{el} print"
# end

array[1..2].each do |el|
  p "#{el} item"
end

# MODIFYING ELEMENTS IN AN ARRAY.......................
# Block MAP method. used to modify array. Non-destructive method
num_arr = [1,2,3,4,5]
p num_arr
new_arr = num_arr.map do |el|
            el + 2
          end
p new_arr
p num_arr

# Destructive map manipulation uses map!
destroy = [10,11,12,13,14]
destroy.map! do |el|
  el+2
end
p destroy


# Modifying each element, destructive approach
num_arr.each_index do |i|
  num_arr[i] += 2
end

p num_arr

# JavaScript equivalent
# for ( var i = 0; i < array.length; i++ ) {
#   array[i]+="wow";
# }
# array

# RUBY PREDICATE METHODS. Any method ending with a symbol. Will end with boolean

p_array = [1,2,3,4,5]
# Return TRUE if array length is zero
p p_array.empty?    # false

# Return TRUE if array includes argument
p p_array.include?(3) # 3

# Return TRUE if ANY element in array satisfies condition
p "any"

test =  p_array.any? do |el|
        el < 10
        end
# true
p test
# Return TRUE only if ALL elements in array satisfy conditions
test =  p_array.all? do |el|
        el > 2
        end
# true
p test


# RUBY SELECT AND REJECT METHODS

ruby_arr = [1,2,3,4,5,6,7,8,9,10]
test = ruby_arr.select do |el|
  el > 2
end

p test

# Destructive method uses exclamation mark

ruby_arr.select! do |el|
  el > 5
end

p ruby_arr

# RUBY UNION ( | ), INTERSECTION (&) AND DIFFERENCE ( - )

numbers = [1,2,3,4,5]
numbers_two = [3,4,5,6,7]
# Union (|) to join and remove duplicate
p numbers | numbers_two
# Intersection (&) shows duplicate values
p numbers & numbers_two
# Difference ( - ) removes values from first array
p numbers - numbers_two
