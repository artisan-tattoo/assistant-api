class AddSigninStuffToShops < ActiveRecord::Migration
  def change
    add_column :shops, :email, :string
    add_column :shops, :password_digest, :string
  end
end
