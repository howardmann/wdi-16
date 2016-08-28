class AutoController < ApplicationController

  def color
    @color = params[:color]
  end

  def engine
    @hp = params[:hp].to_i
    @torque = params[:torque].to_i
  end

end
