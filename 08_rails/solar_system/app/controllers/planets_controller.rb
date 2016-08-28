class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def new
    @planet = Planet.new
  end

  def create
    # planet = Planet.create({
    #   :name => params[:name],
    #   :orbit => params[:orbit],
    #   :moons => params[:moons],
    #   :image => params[:image],
    #   :diameter => params[:diameter]
    # })
    planet = Planet.create( planet_params )
    redirect_to "/planets"
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    planet = Planet.find(params[:id])
    # planet.update ({
    #   :name => params[:name],
    #   :orbit => params[:orbit],
    #   :moons => params[:moons],
    #   :image => params[:image],
    #   :diameter => params[:diameter]
    # })
    planet.update( planet_params )
    redirect_to "/planets"
  end

  def destroy
    planet = Planet.find(params[:id])
    planet.destroy
    redirect_to "/planets"
  end

# For security reasons. This method is not accessible for routes file
private
  def planet_params
    params.require(:planet).permit(:name, :image, :moons, :orbit, :diameter)
  end


end
