class SessionsController < ApplicationController
  def new
  end

  def create
    shop = Shop.where(email: params[:signin][:email]).first

    if shop && shop.authenticate(params[:signin][:password])
      session[:shop_id] = shop.id

      redirect_to root_url, notice: "You have signed in successfully!"
    end
  end

  def destroy
  end
end
