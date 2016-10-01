# # Crypto Square
# Write a program that, given an English text, outputs the encoded version of
# that text.
#
# The size of the square (number of columns) should be decided by the length of the message.
#
# If the message is a length that creates a perfect square (e.g. 4, 9, 16, 25,
# 36, etc), use that number of columns.
#
# If the message doesn't fit neatly into a square, choose the number of columns
# that corresponds to the smallest square that is larger than the number of
# characters in the message.
#
# For example, a message 4 characters long should use a 2 x 2 square. A message
# that is 81 characters long would use a square that is 9 colums wide.
#
# A message between 5 and 8 characters long should use a rectangle 3 characters wide.
#
# Output the encoded text in groups of five letters.
#
# E.g.
#
# ```ruby
# crypto = Crypto.new("Have a nice day. Feed the dog & chill out!")
# crypto.normalize_plaintext
# # => "haveanicedayfeedthedogchillout"
# crypto.size
# # => 36
# crypto.plaintext_segments
# # => ["havean", "iceday", "feedth", "edogch", "illout"]
# crypto.ciphertext
# # => "hifei acedl v..."
# ```
#
# ## Source
# [J Dalbey's Programming Practice problems](http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html)

class Crypto

  def initialize(str)
    @str = str
  end

  def normalize_plaintext
    # removing spaces, punctuation, non letter characters
    @str.downcase.gsub(/[^a-z0-9]/,"")

  end

  def size
    # Square root of the number of characters in the normalize_plaintext characters
    Math.sqrt(normalize_plaintext.size).ceil
  end

  def plaintext_segments
    # Grouping normalize_plaintext into groups of #{size} characters
    normalize_plaintext.split("").each_slice(size).to_a
  end

  def ciphertext
    # output - reassigning characters to a grid of #{size} size
    cipher_text = []
    plaintext_segments.each do |segment|
      segment.each_with_index do |char, i|
        cipher_text[i] ||= []
        cipher_text[i] << char
      end
    end
    cipher_text.map do |el|
      p el.join
    end
  end

end

crypto = Crypto.new("something I want to encrypt")
p crypto.normalize_plaintext
p crypto.size
p crypto.plaintext_segments
p crypto.ciphertext
