# Ruby Arrays

# Set up similar to JavaScript
arr = ['1st', 'Time Square', 'Union Square', '23rd', '18th']

# Built-in methods same as JavaScript
arr.push('New')
arr.pop()
arr.unshift('New_Agan')
arr.shift()
arr.length
arr[0] # Accessing array positions the same
arr[1]

# Additional Ruby array features - Immutable
index = arr.index("Union Square") # 2
range = arr[1..2]     # ['Times Square', 'Union Square']
first = arr.first     # ['1st']
last = arr.last       # ['18th']
sample = arr.sample   # ['random element']
arr.insert(2,"a","b","c") # ['1st', 'Time Square', 'a', 'b', 'c', 'Union Square', '23rd', '18th']
arr.delete_at(2)
arr.delete("c")

taken = arr.take(2)   # ['1st', 'Times Square']
dropped = arr.drop(2) # ['Union Square', '23rd', '18th']

new_arr = [1,2,3,4,nil,nil,nil,nil]
compact = new_arr.compact   # [1,2,3,4]

new_arr.empty?

new_arr.include?(1)
