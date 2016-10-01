require 'pry'

ARGF.each do |line|
  if line =~ /[Ff]red/
    puts line
  end
end
