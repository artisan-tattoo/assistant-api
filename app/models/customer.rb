class Customer < ActiveRecord::Base
  belongs_to :shop
  belongs_to :artist

  has_many :appointments

  def as_json(options={})
    super(  except: [:password_digest],
            include: {
                        artist: { only: [:id, :name] },
                        appointments: {
                          only: [:description, :date_scheduled],
                          include: { artist: { only: [:id, :name] } },
                        },
                      },
    )
  end
end
