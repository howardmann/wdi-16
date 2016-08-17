require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
  "This is the /hello path"
end

get '/hello-world' do
  "This is the /hello-world path"
end

get '/test' do
  "This is the /test path"
end

get '/addTwoNumbers' do
  x = rand( 10 )
  y = rand( 20 )
  result = 2 + 2
  "The result of #{x} + #{y} is equal to #{x + y}"
end

# Literal routing
# get "/hi/Groucho" do
#   "Hi Groucho"
# end
#
# get "/hi/Zeppo" do
#   "Hi Zeppo"
# end
#
# get "/hi/Chico" do
#   "Hi Chico"
# end

# Dynamic routing

# Order is important. More specific should be at top, dynamic should be at bottom
get "/hi/Groucho" do
  "Hello Groucho you were great in Duck Soup"
end

get "/hi/:name" do
  # HM: THIS IS IMPORTANT. Params refers to the hash that Sinatra uses to store information from the http request. In this instance it stores :name as what is entered. TRY AND REMEMBER THIS e.g. hash that shoes on the server {"splat"=>[], "captures"=>["Gobbledygook"], "name"=>"Gobbledygook"}. In this example we entered Gobbledygook in place of where :name is "hi/Gobbledygook" and stored the key :name with value of what was captured. Ignore splat, not worth learning
  name = params[:name]
  "Hit the dynamic route #{name}"
end


get "/add/:x/:y" do
  num_one = params[:x].to_i
  num_two = params[:y].to_i
  "The result of #{num_one} plus #{num_two} is equal to #{num_one + num_two}"
end

get "/subtract/:x/:y" do
  x = params[:x].to_i
  y = params[:y].to_i
  "The result of #{x} minus #{y} is equal to #{x-y}"
end

get "/calculator/:x/:y" do
  x = params[:x].to_i
  y = params[:y].to_i
  "This won't get run because it is not last"
  "<h1>Two <strong> numbers</h1> </strong> chosen are x = #{x} and <br> y = #{y}"
end

get "/hello/:first/:last" do
  first = params[:first]
  last = params[:last]
  "Hello #{first} #{last}"
end


get "/:color" do
  color = params[:color]
  "<p style='color: #{color}'> This text should be #{color} </p>"
end
