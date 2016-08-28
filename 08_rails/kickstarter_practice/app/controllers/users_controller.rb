class UsersController < ApplicationController
  before_action :authorize, :only => [:index, :edit]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @pledges = @user.pledges
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      flash[:success] = "New user created, welcome"
      session[:user_id] = @user.id
      redirect_to users_path
    else
      render :new
    end
  end

  def edit
    @user = @current_user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.save
      flash[:success] = "User updated"
      redirect_to users_path
    else
      render :edit
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    session[:user_id] = nil
    flash[:success] = "User deleted"
    redirect_to pages_home_path
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def authorize
      unless @current_user.present?
        flash[:error] = "You must be logged in to view list of all users"
        redirect_to login_path
      end
    end
end
