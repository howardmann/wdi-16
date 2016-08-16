# RUBY HASHES


# Creating a hash
# Hash literal syntax
badger = {
  :hair => "stylish",
  :style => "cool",
  :weapon => {
    :melee => "machete",
    :range => "sniper rifle",
    :magic => "guilt"
  },
  :array => [1,2,3,4,5],
  :job => "billionaire"
}

p badger[:hair]
p badger[:style]
p badger[:job]
p badger[:weapon][:melee]
p badger[:array][2]
p badger.key("cool") # Get the value of the key that pairs with the value

p "Badger is a #{badger[:style]} #{badger[:job]} with #{badger[:hair]} hair"

# Hash methods
p badger.length # 5
p badger.class # Hash
p badger.empty? # false
p badger.has_key?(:hair) # true
p badger.has_value?("cool") # true
p badger.keys # [:hair, :style, :weapon, :array, :job]
p badger.key("stylish") # :hair
p badger.values
p "values_at"
p badger.values_at(:style,:job,:array)


# ITERATING OVER HASHES
badger.each do |key,value|
  p "Badger's #{key} is #{value}"
end
