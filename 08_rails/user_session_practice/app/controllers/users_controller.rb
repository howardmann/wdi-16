class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = @current_user
  end

  def new
    @user = User.new
  end

  def create
    user = User.create(user_params)
    if user.save
      flash[:success] = "New user created"
      redirect_to home_path
      session[:user_id] = user.id
    else
      render :new
    end
  end

  def edit
    @user = @current_user
  end

  def update
    user = User.find(params[:id])
    user.update( user_params )
    if user.save
      flash[:success] = "User updated "
      redirect_to user_path(user)
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    session[:user_id] = nil
    flash[:success] = "Account deleted"
    redirect_to home_path
  end

  private
    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end
