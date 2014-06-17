class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
    @artist = Artist.create(artist_params)

    flash[:notice] = "New Artist created!"

    redirect_to dashboard_path
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end
end
