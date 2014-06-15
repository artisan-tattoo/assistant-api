class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_shop
    @current_shop ||= Shop.where(id: session[:shop_id]).first
  end
  helper_method :current_shop
end
