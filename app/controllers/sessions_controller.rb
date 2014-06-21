class SessionsController < ApplicationController
  def new
  end

  def create
    user = artist_or_shop

    if user && user.authenticate(params[:signin][:password])
      set_session_ids(user)

      redirect_to dashboard_path, notice: "You have signed in successfully!"
    else
      flash[:error] = "Sorry, wrong email and/or password. Please try again."

      render :new
    end
  end

  def destroy
    session[:artist_id] = nil
    session[:shop_id] = nil
    
    flash[:notice] = "You have been signed out."

    redirect_to root_path
  end

  private

  def artist_or_shop
    artist = Artist.where(email: params[:signin][:email]).first
    shop   = Shop.where(email: params[:signin][:email]).first

    artist || shop
  end

  def set_session_ids(user)
    if user.kind_of?(Artist)
      session[:artist_id] = user.id
      session[:shop_id] = user.shop.id
    elsif user.kind_of?(Shop)
      session[:artist_id] = nil
      session[:shop_id] = user.id
    end
  end
end
