require 'pry'

ARGF.each do |line|
  if line =~ /(wilma.*fred|fred.*wilma)/
    puts line
  end
end
