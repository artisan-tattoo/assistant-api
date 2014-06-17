class Appointment < ActiveRecord::Base
  belongs_to :customer
  belongs_to :artist
end

