class AddShopIdToArtists < ActiveRecord::Migration
  def change
    add_reference :artists, :shop, index: true
  end
end
