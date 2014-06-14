class Shop < ActiveRecord::Base
  has_many :artists
  has_many :customers
end
