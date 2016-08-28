# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# USER .........................
User.destroy_all
howie = User.create :email => 'howie@ga.co', :name => 'howie', :password => 'chicken', :password_confirmation => 'chicken'
badger = User.create :email => 'badger@ga.co', :name => 'badger', :password => 'chicken', :password_confirmation => 'chicken'
wolf = User.create :email => 'wolf@ga.co', :name => 'wolf', :password => 'chicken', :password_confirmation => 'chicken'

puts Rainbow("\nUser test".ljust(40,'.')).red
p "User count: #{User.all.count}"
p "howie email is: #{howie.email}"
p "badger email is: #{badger.email}"
p "wolf email is: #{wolf.email}"

# PROJECT .........................
Project.destroy_all
howie_p1 = howie.projects.create :name => "Shopify", :description => "E-commerce website builder"
howie_p2 = howie.projects.create :name => "Gold Teeth", :description => "I want some new gold grills"
howie_p3 = howie.projects.create :name => "Keyboard", :description => "Reinventing the electronic keyboard with animal sounds"

badger_p1 = badger.projects.create :name => "Cat mansion", :description => "Building a new home for my cat Lewis"
badger_p2 = badger.projects.create :name => "Ear Buds", :description => "New headphones which sound incredible but make you impotent"

wolf_p1 = wolf.projects.create :name => "Cleanify", :description => "Robotic mop and sponge which will clean your face in the morning"

puts Rainbow("\nProject test".ljust(40,'.')).green
p "Project count: #{Project.all.count}"
p "howie's projects: #{howie.projects.all.pluck(:name)}"
p "badger's projects: #{badger.projects.all.pluck(:name)}"
p "wolf's projects: #{wolf.projects.all.pluck(:name)}"

puts Rainbow("\nProject belongs to test".ljust(40,'.')).green
p "Shopify project by: #{howie_p1.user.name}"
p "Cat mansion project by: #{badger_p1.user.name}"
p "Cleanify project by: #{wolf_p1.user.name}"

# PLEDGES .........................
Pledge.destroy_all
howie_pledge_cleanify = howie.pledges.create :project_id => wolf_p1.id, :amount => 20, :comment => "yay i love clean"
badger_pledge_keyboard = badger.pledges.create :project_id => howie_p3.id, :amount => 50, :comment => "I love animal sounds"
wolf_pledge_keyboard = wolf.pledges.create :project_id => howie_p3.id, :amount => 20, :comment => "Animal sounds are great"

puts Rainbow("\nUser pledges for Projects".ljust(40,'.')).yellow
p "Pledge count: #{Pledge.all.count}"
p "Howie pledges to #{howie_pledge_cleanify.project.name} by #{howie_pledge_cleanify.project.user.name} for total amount of #{howie_pledge_cleanify.amount} "
p "Badger pledges to #{badger_pledge_keyboard.project.name} by #{badger_pledge_keyboard.project.user.name} for total amount of #{badger_pledge_keyboard.amount} "
p "Wolf pledges to #{wolf_pledge_keyboard.project.name} by #{wolf_pledge_keyboard.project.user.name} for total amount of #{wolf_pledge_keyboard.amount} "

p "Cleanify total pledges: #{wolf_p1.pledges.count} total amount of: #{wolf_p1.pledges.pluck(:amount)}"

p "Keyboard total pledges: #{howie_p3.pledges.count} total amount of: #{howie_p3.pledges.pluck(:amount)}"
