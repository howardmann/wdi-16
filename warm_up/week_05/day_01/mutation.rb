# # Point Mutations
# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
#
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
#
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
#
# This is called the 'Hamming distance'
#
#     GAGCCTACTAACGGGAT
#     CATCGTAATGACGGCCT
#     ^ ^ ^  ^ ^    ^^
#
# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# ## Source
# The _Calculating Point Mutations_ problem at [Rosalind](http://rosalind.info/problems/hamm/)

# No class method
one = %w(G A G C C T A C T A A C G G G A T)
two = %w(C A T C G T A A T G A C G G C C T)

def ham (arr1, arr2)
  count = 0
  arr1.each_index do |i|
    count+=1 unless arr1[i] == arr2[i]
  end
  p count
end

ham(one,two)

# Class initialize method
class DNA
  attr_accessor :str1, :str2

  def initialize(str1, str2)
    @str1 = str1.split('')
    @str2 = str2.split('')
  end

  def hamming_distance
    count = 0
    @str1.each_index do |i|
      count+=1 unless @str1[i] == @str2[i]
    end
    p count
  end

end

d = DNA.new("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT")
p d.str1, d.str2
d.hamming_distance
p d.str2
