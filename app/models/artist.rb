class Artist < ActiveRecord::Base
  belongs_to :shop
  has_many :appointments

  has_secure_password
end
