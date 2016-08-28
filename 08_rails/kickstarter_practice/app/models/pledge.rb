# == Schema Information
#
# Table name: pledges
#
#  id         :integer          not null, primary key
#  amount     :integer
#  comment    :text
#  user_id    :integer
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pledge < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  validates :amount, numericality: {greater_than: 0}
end
