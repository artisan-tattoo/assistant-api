class ShopsController < ApplicationController
  def create
    @shop = shops.create(shop_params)
  end

  def show
    @shop = Shop.find(params[:id])
    render :json =>  @shop
  rescue Errno::ENOENT
    raise ActionController::RoutingError.new("Sorry, no shop exists with slug #{params[:id]}")
  end

  def update
    @shop = Shop.find(params[:id])
    @shop = shops.create(shop_params)
  end

  private

  def shop_params
    params.require(:shop).permit(
      :name,
      :email,
      :password,
      :password_confirmation,
    )
  end
end
