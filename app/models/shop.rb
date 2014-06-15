class Shop < ActiveRecord::Base
  has_secure_password

  has_many :artists
  has_many :customers
end
