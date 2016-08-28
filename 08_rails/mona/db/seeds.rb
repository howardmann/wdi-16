# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Artist.destroy_all

a1 = Artist.create({
    :name => "Joan Miro",
    :nationality => "Spanish",
    :dob => "1893/04/20",
    :period => "20th century",
    :image => "http://www.joan-miro.net/images/joan-miro.jpg"
})

Artist.create([
  {
    :name => "Salvador Dali",
    :nationality => "Spanish",
    :dob => "1904/05/11",
    :period => "20th century",
    :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/440px-Salvador_Dal%C3%AD_1939.jpg"
  },
  {
    :name => "Yayoi Kusama",
    :nationality => "Japanese",
    :dob => "1929/03/22",
    :period => "21st century",
    :image => "http://blog.gessato.com/wp-content/uploads/2016/05/yayoi-kusama-bio.jpg"
  },
  {
    :name => "Damien Hirst",
    :nationality => "British",
    :dob => "1965/06/01",
    :period => "21st century",
    :image => "http://www.thefamouspeople.com/profiles/images/damien-hirst-3.jpg"
  },
  {
    :name => "Banksy",
    :nationality => "British",
    :dob => "Unknown",
    :period => "21st century",
    :image => "https://lh3.googleusercontent.com/-GJCMtccqVRQ/Tu9-cmDgGXI/AAAAAAAAAG8/HyFAVl8RJm4/w426-h574/banksy-cardinal-sin-sculpture-church-500x674.jpg"
  },
  {
    :name => "Ai Wei Wei",
    :nationality => "Chinese",
    :dob => "1957/08/28",
    :period => "21st century",
    :image => "http://i.telegraph.co.uk/multimedia/archive/01863/Ai-Weiwei_1863785i.jpg"
  }

])


Work.destroy_all

w1 = Work.create({
    :title => "Flight of Dragonfly in Front of the Sun",
    :year => "1968",
    :medium => "oil on canvas",
    :style => "abstract",
    :image => "http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg",
    :artist_id => a1.id
})
