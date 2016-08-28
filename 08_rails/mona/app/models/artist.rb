# == Schema Information
#
# Table name: artists
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  period      :text
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Artist < ActiveRecord::Base # link to artists table
  has_many :works
end
