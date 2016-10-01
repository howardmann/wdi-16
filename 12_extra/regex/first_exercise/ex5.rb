require 'pry'

ARGF.each do |line|
  if line =~ /([a-z])\1/
    puts line
  end
end
