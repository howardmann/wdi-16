# # Normalized Phone Number
# * If the phone number is less than 10 digits assume that it is bad number
# * If the phone number is 10 digits assume that it is good
# * If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
# * If the phone number is 11 digits and the first number is not 1, then it is a bad number
# * If the phone number is more than 11 digits assume that it is a bad number

# Hint: Only make one test pass at a time. You can turn off tests by sending the message `skip` to it:
#
# ```ruby
# def test_string_conversion
#   skip
#   assert_equal 1, "1".to_i
# end
# ```

class Phone
  attr_accessor :input

  def initialize(input)
    @input = input
  end

  def number
    clean = @input.gsub(/\D/,"")
    if clean.length == 11 && clean[0] == "1"
      clean[0] = ""
      return clean
    elsif clean.length == 11 && clean[0] != "1"
      clean[0] = ""
      return clean.gsub(/\d/,"0")
    elsif clean.length == 9
      return clean.gsub(/\d/,"0") + "0"
    else
      return clean
    end
  end

  def area_code
    @input.match(/\d{3}/)[0]
  end

  def to_s
    matched = @input.match(/(\d{3})(\d{3})(\d{4})/)
    return "(#{matched[1]}) #{matched[2]}-#{matched[3]}"
  end

end


a = Phone.new("(123) 456-7890")
p a.number

b = Phone.new("11234567890")
p b.number

c = Phone.new("21234567890")
p c.number

d = Phone.new("123456789")
p d.number

e = Phone.new("1234567890")
p e.area_code

f = Phone.new("1234567890")
p f.to_s
