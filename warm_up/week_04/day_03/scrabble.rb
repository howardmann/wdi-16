# # Scrabble Score
#
# Write a program that, given a word, computes the scrabble score for that word.
# scrabble.score("cabbage")
# # => 14

# Your program should be in a file named `scrabble.rb`.
# You should be able to compute the score for any word entered by the user.
#
# ## Letter Values
#
# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```
#
# ## Extensions
#
# * You can play a `:double` or a `:triple` letter.
# * You can play a `:double` or a `:triple` word.

@scrabble = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F","H","V", "W", "Y"],
  5 => ["K"],
  8 => ["J","X"],
  10 => ["Q","Z"]
}

def randomize(value)
  random = rand(10)
  if random < 3
    value *= 2
  elsif random > 9
    value *= 3
  end
  value
end

def score(word)
  p arr = word.upcase.split('')
  score = 0
  @scrabble.each do |k,v|
    arr.each do |el|
      if @scrabble[k].include?(el) == true
        score+= randomize(k)
      end
    end
  end
  p score
end

score('cabbage')
score('apple')
score('oRaNgE')
