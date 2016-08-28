# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

######### USER
User.destroy_all
u1 = User.create :name => "Howie", :email => "howie@ga.co", :password => "123", :password_confirmation => "123", :admin => true
u2 = User.create :name => "Badger", :email => "badger@ga.co", :password => "123", :password_confirmation => "123"
u3 = User.create :name => "Wolf", :email => "wolf@ga.co", :password => "123", :password_confirmation => "123"

puts Rainbow("User tests".ljust(30,'.')).bg(:blue)
p "Total user count: #{User.all.count}"
p "User names include: #{User.all.pluck(:name)}"

######## PROJECT
Project.destroy_all
p1 = Project.create :name => "Project 1"
p2 = Project.create :name => "Project 2"
p3 = Project.create :name => "Project 3"
p4 = Project.create :name => "Project 4"
p5 = Project.create :name => "Project 5"
p6 = Project.create :name => "Project 6"
p7 = Project.create :name => "Project 7"

puts Rainbow("\nProject tests".ljust(30,'.')).bg(:red)
p "Total project count: #{Project.all.count}"
p "Project names include: #{Project.all.pluck(:name)}"

######## USER HAS_MANY PROJECTS
u1.projects << p1 << p2
u2.projects << p3 << p4 << p5 << p6
u3.projects << p7

puts Rainbow("\nUser has many projects".ljust(30,'.')).bg(:yellow).black
p "User 1 projects include: #{u1.projects.pluck(:name)}"
p "User 2 projects include: #{u2.projects.pluck(:name)}"
p "User 3 projects include: #{u3.projects.pluck(:name)}"

######## PLEDGES
Pledge.destroy_all
pledge1 = u1.pledges.create :amount => 20, :project_id => p3.id

puts Rainbow("\nPledges test: User creates a new pledge for a project".ljust(30,'.')).bg(:hotpink).black
p "Pledge 1 amount by #{pledge1.user.name} for $#{pledge1.amount.round} to #{pledge1.project.name} by user #{pledge1.project.user.name}"
p "Project 3 by #{p3.user.name} received a pledge for $#{p3.pledges.first.amount.round} by user #{p3.pledges.first.user.name}"
