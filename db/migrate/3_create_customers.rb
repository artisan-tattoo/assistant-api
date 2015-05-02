class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.datetime :date_on_waiting_list
      t.integer :status
      t.boolean :local
      t.string :location
      t.string :credit
      t.text :want
      t.text :notes
      t.references :shop, index: true
      t.references :artist, index: true

      t.timestamps
    end
  end
end
