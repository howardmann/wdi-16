# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

puts "What suburb do you live in Sydney"
suburb = gets.chomp.downcase

response =  case suburb
            when "mosman", "vaucluse", "potts point" then "ladeeda"
            when "chippendale" then "my kinda party"
            else
            "Never heard of #{suburb}. I'm sure its lame"
            end

p response
