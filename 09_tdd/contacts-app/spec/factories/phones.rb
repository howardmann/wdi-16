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

FactoryGirl.define do
  factory :phone do
    # Build a new contact and associate it with this phone
    association :contact
    sequence(:phone) {Faker::PhoneNumber.phone_number}
    # phone {Faker::PhoneNumber.phone_number}
    phone_type "Home"

    # home_phone, mobile_phone or an office_phone. Means when someone builds a specific type of phone it inherits from the :phone factory and overrides specific properties 
    factory :home_phone do
      phone_type "Home"
    end

    factory :mobile_phone do
      phone_type "Mobile"
    end

    factory :office_phone do
      phone_type "Office"
    end
  end
end
