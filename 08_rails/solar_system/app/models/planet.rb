# == Schema Information
#
# Table name: planets
#
#  id       :integer          primary key
#  name     :text
#  image    :text
#  orbit    :float
#  diameter :float
#  moons    :integer
#

class Planet < ActiveRecord::Base
  validates :name, presence: true

end
