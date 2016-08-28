# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
u1 = User.create :name => "Craig", :email => "craigsy@ga.co", :password => "chicken", :password_confirmation => "chicken"

u2 = User.create :name => "Jonesy", :email => "jonesy@ga.co", :password => "chicken", :password_confirmation => "chicken"

u3 = User.create :name => "Badger", :email => "badger@ga.co", :password => "chicken", :password_confirmation => "chicken"

p "User count: #{User.all.count}"
p u1

Mixtape.destroy_all
m1 = Mixtape.create :title => "Fire"
m2 = Mixtape.create :title => "Easter Tunes"
m3 = Mixtape.create :title => "Code Jams"

p "Mixtape count: #{Mixtape.all.count}"
u1.mixtapes << m1
u2.mixtapes << m2
u3.mixtapes << m3

p "Mixtape count of first user: #{u1.mixtapes.count}"
p "Mixtape count of second user: #{u2.mixtapes.count}"
p "Mixtape count of third user: #{u3.mixtapes.count}"

p "User name for the first mixtape: #{m1.user.name}"
p "User name for the second mixtape: #{m2.user.name}"
p "User name for the third mixtape: #{m3.user.name}"

############
Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Chamber Pop'
g3 = Genre.create :name => 'Math Rock'
p "Genre count: #{Genre.all.count}"

############
Song.destroy_all
s1 = Song.create :name => "Electricity song"
s2 = Song.create :name => "Marianas Trench"
s3 = Song.create :name => "Have a safe trip, dear"

g1.songs << s1 << s2 << s3
g2.songs << s2 << s3
g3.songs << s1 << s3

# Test that for a given song I can access all genres
puts "SONG HAS_AND_BELONGS_TO_MANY GENRES"
p "Genre 1 has songs #{g1.songs.pluck(:name)}"
p "Genre 2 has songs #{g2.songs.pluck(:name)}"
p "Genre 3 has songs #{g3.songs.pluck(:name)}"
# Test that for a given genre I can access all songs
puts "GENRE HAS_AND_BELONGS_TO_MANY SONGS"
p "Song 1 has genres #{s1.genres.pluck(:name)}"
p "Song 2 has genres #{s2.genres.pluck(:name)}"
p "Song 3 has genres #{s3.genres.pluck(:name)}"
# Practice one artist having multiple songs and multiple albums
s4 = Song.create({
  :name => "New song"
})

p "Song count: #{Song.all.count}"

Album.destroy_all
a1 = Album.create({
  :name => "Electricity album"
})
a2 = Album.create({
  :name => "From the vapor to the gasoline"
})
a3 = Album.create({
  :name => "Systems/ Layers"
})

# Practice one artist having multiple songs and albums
a4 = Album.create({
  :name => "New album"
})


p "Album count #{Album.all.count}"

# This append oeprator will change the album_id on the song then save it. Basically saying for the song a1 go in and seed a new property to s1 :album_id to a1.id
# Append songs to albums
a1.songs << s1
a2.songs << s2
a3.songs << s3
# New album and new song belonging to existing artist
a4.songs << s4


p "Song count on the first album: #{a1.songs.count}"
p "Song count on the second album: #{a2.songs.count}"
p "Song count on the third album: #{a3.songs.count}"

p "Album name for the first song: #{s1.album.name}"
p "Album name for the second song: #{s2.album.name}"
p "Album name for the third song: #{s3.album.name}"

Artist.destroy_all
r1 = Artist.create({
  :name => "June of 44"
})

r2 = Artist.create({
  :name => "The Mercury Program"
})

r3 = Artist.create({
  :name => "Rachels"
})

p "Artist count #{Artist.all.count}"

# Append each artist to a song
r1.songs << s1
r2.songs << s2
r3.songs << s3

# Artist 1 has another song4 which belongs to a new album4
r1.songs << s4

p "SONG BELONGS TO AN ARTIST"
p "Song count by the first artist: #{r1.songs.count}"
p "Song count by the second artist: #{r2.songs.count}"
p "Song count by the third artist: #{r3.songs.count}"

p "SONG BELONGS TO AN ALBUM"
p "Artist name for the first song: #{s1.artist.name}"
p "Artist name for the second song: #{s2.artist.name}"
p "Artist name for the third song: #{s3.artist.name}"

p "ARTIST HAS_MANY ALBUMS THROUGH THE SONGS TABLE"
p "Artist one's album count #{r1.albums.count}"
p "Artist two's album count #{r2.albums.count}"
p "Artist three's album count #{r3.albums.count}"

# For a given album, return all artists
p "ALBUM HAS_MANY ARTISTS THROUGH THE SONGS TABLE"
p "Album one artist count #{a1.artists.count}"
p "Album two artist count #{a2.artists.count}"
p "Album three artist count #{a3.artists.count}"

#HM!!! RUBY PLUCK: picks out all the values of a property in a db object. Artist.all.pluck(:name)


# HAS_AND BELONGS_TO MANY relationship

# Building sneaky join table
# HM!! Very important staps
# 1. rails g model Genre
# 2. rails g migration CreateGenresSongs
# !!! Must be alphabetical and pluralised


puts "MIXTAPE HAS_AND_BELONGS_TO_MANY SONGS"
m1.songs << s1 << s2
m2.songs << s1 << s3
m3.songs << s1 << s2 << s3
p "Mixtape 1 has many songs: #{m1.songs.pluck(:name)}"
p "Mixtape 2 has many songs: #{m1.songs.pluck(:name)}"
p "Mixtape 3 has many songs: #{m1.songs.pluck(:name)}"

puts "SONG HAS_AND_BELONGS_TO_MANY MIXTAPES"
p "Song 1 has many mixtapes: #{s1.mixtapes.pluck(:title)}"
p "Song 2 has many mixtapes: #{s2.mixtapes.pluck(:title)}"
p "Song 3 has many mixtapes: #{s3.mixtapes.pluck(:title)}"

puts "MIXTAPE ONE SONG NAMES"
m1.songs.each do |el|
  puts "\t#{el.name}"
end

puts "ARTIST HAS_MANY GENRES THROUGH SONGS"
p "Artist 1 has many genres: #{r1.genres.pluck(:name)}"
p "Artist 2 has many genres: #{r2.genres.pluck(:name)}"
p "Artist 3 has many genres: #{r3.genres.pluck(:name)}"


puts "ALL ARTIST NAMES FOR GENRE ONE"

g1.artists.each do |el|
  puts "\t #{el.name}"
end
