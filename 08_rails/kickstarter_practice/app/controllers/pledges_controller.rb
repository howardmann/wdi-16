class PledgesController < ApplicationController
  before_action :authorize, :only => [:new, :edit]

  def index
    @pledges = Pledge.all
  end

  def show
    @pledge = Pledge.find(params[:id])
  end

  def new
    @project = Project.find(params[:project_id])
    @pledge = @project.pledges.new
  end

  def create
    @project = Project.find(params[:project_id])
    @pledge = @current_user.pledges.create(pledge_params)
    if @pledge.save
      @project.pledges << @pledge
      flash[:success] = "Thank you for pledging"
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  def edit
    @pledge = @current_user.pledges.find(params[:id])
  end

  def update
    @pledge = Pledge.find(params[:id])
    @pledge.update(pledge_params)
    flash[:success] = "Pledge updated"
    render :show
  end

  def destroy
    @pledge = Pledge.find(params[:id])
    @pledge.destroy
    flash[:success] = "Pledge removed"
    redirect_to user_path(@current_user)
  end

  private
    def pledge_params
      params.require(:pledge).permit(:amount, :comment, :project_id)
    end

    def authorize
      unless @current_user.present?
        flash[:error] = "You must be logged in to pledge"
        redirect_to login_path
      end
    end

end
