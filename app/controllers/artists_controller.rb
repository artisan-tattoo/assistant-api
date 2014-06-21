class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
    @artist = current_shop.artists.create(artist_params)

    flash[:notice] = "New Artist created!"

    redirect_to dashboard_path
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
