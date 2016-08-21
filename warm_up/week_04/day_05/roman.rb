# Ruby Roman Numeral Converter

# Brute force because I am dumb

def convert(num)
  track = num
  str = ''
  while track > 0
    if track - 1000 >= 0
      str += 'M'
      track -= 1000
    elsif track - 900 >= 0
      str += 'CM'
      track -= 900
    elsif track - 500 >= 0
      str += 'D'
      track -= 500
    elsif track - 100 >= 0
      str += 'C'
      track -= 100
    elsif track - 90 >= 0
      str += 'XC'
      track -= 90
    elsif track - 50 >= 0
      str += 'L'
      track -= 50
    elsif track - 10 >= 0
      str += 'X'
      track -= 10
    elsif track - 9 >= 0
      str += 'IX'
      track -= 9
    elsif track - 5 >= 0
      str += 'V'
      track -= 5
    elsif track - 4 >= 0
      str += 'IV'
      track -= 4
    elsif track - 1 >= 0
      str += 'I'
      track -= 1
    end
  end
  p str
end

convert(13)
convert(1900)
convert(1700)
convert(2008)
