class PledgesController < ApplicationController
  before_action :authorize

  def new
    @project = Project.find(params[:project_id])
    @pledge = @project.pledges.new
  end

  def show
    @user = User.find(params[:user_id])
    @pledge = @user.pledges.find(params[:id])
  end

  def edit
    @user = User.find(params[:user_id])
    @pledge = @user.pledges.find(params[:id])
  end

  def update
    @user = User.find(params[:user_id])
    @pledge = @user.pledges.find(params[:id])
    @pledge.update(pledge_params)
    flash[:success] = "Updated pledge"
    render :show
  end

  def create
    @project = Project.find(params[:project_id])

    # unless @current_user.pledges.find_by(:project_id => @project.id) == nil
    #   @pledge = @current_user.pledges.find_by(:project_id => @project.id)
    #
    #   @pledge.update_attribute(:amount, @pledge.amount + params[:pledge][:amount].to_i)
    #   flash[:success] = "Thank you for pledging $ #{@pledge.amount} to #{@project.user.name}"
    #   redirect_to project_path(@project)
    #
    # else
    #   @pledge = @current_user.pledges.create(pledge_params)
    #   if @pledge.save
    #     @project.pledges << @pledge
    #     flash[:success] = "Thank you for pledging $ #{@pledge.amount} to #{@project.user.name}"
    #     redirect_to project_path(@project)
    #   else
    #     render :new
    #   end
    # end

    @pledge = @current_user.pledges.create(pledge_params)
    if @pledge.save
      @project.pledges << @pledge
      flash[:success] = "Thank you for pledging $ #{@pledge.amount} to #{@project.user.name}"
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @pledge = @user.pledges.find(params[:id])
    @pledge.destroy
    flash[:success] = "Pledge deleted"
    redirect_to user_path(@user)
  end

  private
    def pledge_params
      params.require(:pledge).permit(:amount, :project_id)
    end

    def authorize
      unless @current_user.present?
        flash[:error] = "You must be logged in to make a pledge"
        redirect_to project_path(params[:project_id])
      end
    end

end
