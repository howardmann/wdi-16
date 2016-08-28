class User < ActiveRecord::Base
  has_secure_password
  has_many :projects, dependent: :destroy
  has_many :pledges, dependent: :destroy
end
