class Appointment < ActiveRecord::Base
  belongs_to :customer
  belongs_to :artist

  def as_json(options={})
    super(include: {customer: {only: [:id, :name, :status]},
                    artist:   {only: [:id, :name]},
    })
  end
end

