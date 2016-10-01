# == Schema Information
#
# Table name: phones
#
#  id         :integer          not null, primary key
#  contact_id :integer
#  phone      :string
#  phone_type :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Phone, type: :model do
  it "has a valid factory" do
    phone = FactoryGirl.build(:phone)
    expect(phone).to be_valid
  end

  it "is able to access the correct contact" do
    contact = FactoryGirl.build(:contact)
    phone = FactoryGirl.build(:home_phone, contact: contact)
    expect(phone.contact).to be(contact)
  end



end
