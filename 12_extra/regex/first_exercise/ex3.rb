require 'pry'

ARGF.each do |line|
  if line =~ /[.]/ # or /\./
    puts line
  end
end
