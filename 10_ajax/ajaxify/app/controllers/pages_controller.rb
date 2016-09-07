class PagesController < ApplicationController
  # HM: look up include ViewHelpers to use Ruby view helpers with ajax requests

  def index
    # To run any terminal commands in rails use the backticks ` `
    @lotto_numbers = Array(1..45).sample(6).join(', ')
    @uptime = ` uptime `
    @fortune = ` fortune `
  end

  def lotto_numbers
    # This loads the data as text to the page without reloading the full html of the page. What we are saying: we are stopping rails from calling the controller and loading html and instead telling it to render text
    render :text => Array(1..45).sample(6).join(', ')
  end

  def uptime
    # HM: think of this as overriding the built-in rails load html function and instead renders just the text. Check the browser to see what it does and it will be clearlocalhost:3000/uptime
    render :text => ` uptime `
  end

  def fortune
    render :text => ` fortune `
  end

  def info
    # Create a Ruby object with key value pairs
    @info = {
      :fortune => ` fortune `,
      :uptime => ` uptime `,
      :lottoNumbers => Array(1..45).sample(6).join(', '),
      :currentTime => Time.now.to_s
    }
    # Rails helper which says if the get url request format is for html, do nothing if json then render the javascript object
    respond_to do |format|
      # Rails bult-in helper which turns ruby hash into json string @info.to_json
      format.json { render :json => @info }
      # If user requests the info page then just load the html
      # HM power note: When the html page loads it will still have access to the @info json above
      format.html

    end
  end

end
