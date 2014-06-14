class Customer < ActiveRecord::Base
  belongs_to :shop

  has_many :appointments
end
