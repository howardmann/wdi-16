# Write a program that takes a word problem in the format:
#
# What is 5 plus 13?
# and returns the answer as an integer.
#
# The program should handle large numbers and negative numbers.

# Ruby match syntax
# str.match(/regex/) => => #<MatchData "str" 1:"match" 2:"match">
# We use parenthesis in our regex to return matched groups. The MatchData class that is returned is similar to an array where the [0] position represents the string, [1] represents the first matched group result, [2] the second etc.


class Calculator

  def ask(question)
    question.match(/What is (-?\d+) plus (-?\d+)/) do |match|
      match[1].to_i + match[2].to_i
    end
  end
end

c = Calculator.new
p c.ask("What is 1 plus 3")
p c.ask("What is -1 plus 3")
