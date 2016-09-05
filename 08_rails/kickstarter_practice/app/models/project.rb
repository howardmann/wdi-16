# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  belongs_to :user
  has_many :pledges

  validates :name, :description, presence: true

  def sum_amount
    pledges.sum(:amount)
  end

end
