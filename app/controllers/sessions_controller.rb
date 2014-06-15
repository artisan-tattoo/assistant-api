class SessionsController < ApplicationController
  def new
  end

  def create
    shop = Shop.where(email: params[:signin][:email]).first

    if shop && shop.authenticate(params[:signin][:password])
      session[:shop_id] = shop.id

      redirect_to dashboard_path, notice: "You have signed in successfully!"
    else
      flash[:error] = "Sorry, wrong email and/or password. Please try again."

      render :new
    end
  end

  def destroy
    session[:shop_id] = nil
    
    flash[:notice] = "You have been signed out."

    redirect_to root_path
  end
end
