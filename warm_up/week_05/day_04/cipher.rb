# # Atbash Cipher
#
# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the
# second-last, and so on.
#
# An Atbash cipher for the Latin alphabet would be as follows:
#
# ```plain
# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# ```
#
# It is a very weak cipher because it only has one possible key, and it is a
# simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
#
# ## Examples
# - Encoding "test" gives "gvhg"
# - Decoding "gvhg" gives "test"

def atbash(string)
  plain = ('a'..'z').to_a
  cipher = plain.reverse
  arr = string.split('')
  solution = []

  # Ruby helper to iterate through string:
  # string.each_char do |el|

  arr.each do |el|
    cipher_index = plain.index(el)
    solution.push(cipher[cipher_index])
  end

  p solution.join('')
end

atbash('test')
atbash('gvhg')
