require 'pry'

ARGF.each do |line|
  if line =~ /[A-Z][a-z]/
    puts line
  end
end
