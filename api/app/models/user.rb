class User < ApplicationRecord
  has_secure_password

  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }
end
