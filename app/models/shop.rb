class Shop < ActiveRecord::Base
  has_secure_password

  has_many :artists
  has_many :customers

  def as_json(options={})
    super(  
            except: [
                      :password_digest,
                      :created_at,
                      :updated_at,
                    ],
            include: {
              artists: {only: [:id, :name, :updated_at]}
            },
    )
  end
end
