class DashboardController < ApplicationController
  def show
    @artists = current_shop.artists
    @customers = current_shop.customers
  end
end
