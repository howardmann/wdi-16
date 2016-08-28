class UsersController < ApplicationController
  before_action :authorize, :only => [:index, :edit]
  # Run the authorize request only on the index and edit pages

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  # Run an exception for new/ log_in
  def new
    @user = User.new
  end

  def create
    @user = User.create( user_params )
    if @user.save
      flash[:success] = "User was successfully created"
      redirect_to users_path
    else
      flash[:error] = "The lens cap is on"
      render :new
    end
  end

  def edit
    @user = @current_user
  end

  def update
    user = User.find(params[:id])
    user.update( user_params )

    redirect_to user_path(user)
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path
  end

  private
    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation, :image);
    end

    def authorize
      flash[:error] = "You need to be logged in to see that" unless
      @current_user.present?
      redirect_to login_path unless @current_user.present?
    end

end
