# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Makes sure we refresh the seed file
Planet.destroy_all

# rake db:seed
earth = Planet.create(
    {
      :name => "Earth",
      :orbit => 1,
      :moons => 1,
      :diameter => 6779
    }
)

mars = Planet.create(
    {
      :name => "Mars",
      :orbit => 0.7,
      :moons => 2,
      :diameter => 1000
    }
)

venus = Planet.create(
    {
      :name => "Venus",
      :orbit => 2,
      :moons => 3,
      :diameter => 300
    }
)

jupiter = Planet.create(
    {
      :name => "Jupiter",
      :orbit => 2,
      :moons => 3,
      :diameter => 500
    }
)

neptune = Planet.create(
    {
      :name => "Neptune",
      :orbit => 10,
      :moons => 12,
      :diameter => 1000
    }
)
