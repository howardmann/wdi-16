# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  name            :string
#  admin           :boolean          default(FALSE)
#  image           :text
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

# This is extremely important. If you are given password_digest then use brcypt

class User < ActiveRecord::Base
  has_secure_password
  has_many :mixtapes
end
