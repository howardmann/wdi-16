# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ActiveRecord::Base
  has_and_belongs_to_many :songs
  has_many :artists, through: :songs
end

# !! This is important. We need to write a new relationship HAS_AND_BELONGS_TO_MANY :SONGS
