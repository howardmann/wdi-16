class Project < ActiveRecord::Base
  belongs_to :user
  has_many :pledges, dependent: :destroy
end
