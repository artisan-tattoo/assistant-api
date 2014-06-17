class DashboardController < ApplicationController
  def show
    @artists = current_shop.artists
  end
end
