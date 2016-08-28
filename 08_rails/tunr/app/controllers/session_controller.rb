class SessionController < ApplicationController
  def new
  end

  # Login session
  def create
    user = User.find_by(:email => params[:email])
    # This is important, user.present? says if the email exist and the password works you get in
    # AUTHENTICATE IS IMPORTANT IT VERIFIES IF OUR ENTERED PASSWORD MATCHES THE UNIQUE HASH
    if user.present? && user.authenticate(params[:password])
      flash[:success] = "User successfully logged in"
      # !!!!!!!!!!!HM This is important. This creates a new session key named :user_id which equals user.id
      session[:user_id] = user.id
      redirect_to users_path
    else
      flash[:error] = "Your password or email is incorrect"
      redirect_to login_path
    end
  end


  def destroy
    session[:user_id] = nil
    flash[:success] = "You successfully logged out"
    redirect_to users_path
  end

end
