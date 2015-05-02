class ArtistsController < ApplicationController

  def create
    @artist = current_shop.artists.create(artist_params)
  end

  def show
    @artist = Artist.find(params[:id])
    render json: @artist, content_type: "application/json"
  rescue Errno::ENOENT
    raise ActionController::RoutingError.new(
      "Sorry, no artist exists with slug #{params[:id]}"
    )
  end

  def update
    @artist = Artist.find(params[:id])
    @artist = current_shop.artists.create(artist_params)
  end

  private

  def artist_params
    params.require(:artist).permit(
      :name,
      :email,
      :password,
      :password_confirmation,
    )
  end
end
