class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by(:email => params[:email])
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:success] = "Successful login: #{user.name}"
      redirect_to home_path
    else
      flash[:error] = "Username or password incorrect"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "Logged out"
    redirect_to home_path
  end
end
