class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.references :shop, index: true 
 
      t.timestamps
    end
  end
end
