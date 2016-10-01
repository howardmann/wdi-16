# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :contact do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    # Gem uses sequence and |n| to make email unique
    # sequence(:email) { |n| "johndoe#{n}@ga.co" }
    email { Faker::Internet.email }

    # Similar to callbacks in JavaScript
    after(:build) do |contact|
      [:home_phone, :office_phone, :mobile_phone].each do |phone_type|
        FactoryGirl.create(phone_type, contact: contact)
      end
      # # Make sure that this contact has three phones
      #   # One home_phone
      #   FactoryGirl.build(:home_phone, contact: contact)
      #   # One office_phone
      #   FactoryGirl.build(:office_phone, contact: contact)
      #   # One mobile_phone
      #   FactoryGirl.build(:mobile_phone, contact: contact)
    end

  end
end
