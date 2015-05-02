class Artist < ActiveRecord::Base
  belongs_to :shop
  has_many :appointments
  has_many :customers

  has_secure_password

  def as_json(options={})
    super(  except: [:password_digest],
            include: {
                      customers: {only: [:id, :name, :status, :updated_at]},
                      appointments: {
                        only: [:description, :date_scheduled],
                        include: { customer: {only: [:id, :name]}}
                      },
                   },
    )
  end
end
