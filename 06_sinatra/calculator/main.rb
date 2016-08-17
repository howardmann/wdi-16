# Include appropriate gems
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# Home Page
# Set up at top for home page. If nothing is entered go to home page
get '/' do
  "Home page"
  # This command goes into the views folder accesses the file named home.erb
  erb(:home)
end

# About Page
# Literal route - GET localhost:4567/about
get '/about' do
  "You have reached the about page"
  erb(:about)
end

# Contact Page
get '/contact' do
  "You have reached the contact page"
  erb(:contact)
end

# URL Calculator Pages
get '/multiply/:x/:y' do
  x = params[:x].to_f
  y = params[:y].to_f
  "Result is: <strong>#{x*y}</strong>"
end

get '/users' do
  "This should show the profile all of the users"
  erb( :users )
end

get '/users/:username' do
  username = params[:username]
  "This should show the profile for #{username}"
  erb( :user_show )
end

get '/calculate' do
  erb( :calculate )
end

get '/result' do
  @first_number = params[:first_number].to_i
  @second_number = params[:second_number].to_i
  @result = @first_number + @second_number
  erb( :result )
  # "This should show the result: #{result}"
end


# HTTPARTY REMEMBER THIS CODE
# require 'httparty'
# HTTParty.get 'http://www.omdbapi.com/?t=Satantango'
# movie_name = "Satantango"
# url = "http://omdbapi.com?t=#{movie_name}"
# @result = HTTParty.get( url )


# Getting multiple items
# require 'httparty'
# movie_search = 'Aliens'
# url = "http://omdbapi.com?s=#{movie_search}"
# full_list = HTTParty.get( url )
# results_array = full_list["Search"]
