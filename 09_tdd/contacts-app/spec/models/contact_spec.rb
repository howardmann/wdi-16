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

require 'rails_helper'

# Model test typically include:
  # A validitiy test
  # Tests for all individual invalid cases
  # Tests for instance methods
  # Tests for class methods

RSpec.describe Contact, type: :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:contact)).to be_valid
  end

  it "has three phone numbers" do
    contact = FactoryGirl.build(:contact)
    expect(contact.phones.length).to eq(3)
  end

  it "is valid with a first_name, last_name and an email" do
    # 1. Setup
    contact = FactoryGirl.build(:contact)
    # 2. Execution
    contact.valid?
    # 3. Validation
    expect(contact).to be_valid
  end

  it "is invalid without a first_name" do
    contact = FactoryGirl.build :contact, first_name: nil
    # In rails @messages errors only gets called when you call .valid? or create
    contact.valid?
    # expect(contact).to_not be_valid # We don't write it this way because we want to be explicit about the error
    expect(contact.errors[:first_name]).to include("can't be blank")
  end

  it "is invalid without a last_name" do
    contact = FactoryGirl.build :contact
    contact.last_name = nil
    contact.valid?
    expect(contact.errors[:last_name]).to include("can't be blank")
  end

  it "is invalid without an email" do
    contact = FactoryGirl.build :contact, email: nil
    contact.valid?
    expect(contact.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
    contact = FactoryGirl.create :contact, email: "marx@ga.co"
    newContact = FactoryGirl.build :contact, email: "marx@ga.co"

    newContact.valid?

    expect(newContact.errors[:email]).to include("has already been taken")
  end

  it "#full_name = returns a contact full name as a string" do
    contact = Contact.new :first_name => "Harpo", :last_name => "Marx", :email => "harpo@ga.co"

    expect(contact.full_name).to eq("Harpo Marx")
  end

  describe ".by_letter = filters last_name by letter" do
    before :each do
      @smith = Contact.create :first_name => "John", :last_name => "Smith", :email => "jsmith@example.com"
      @jones = Contact.create :first_name => "Tim", :last_name => "Jones", :email => "tjones@example.com"
      @johnson = Contact.create :first_name => "John", :last_name => "Johnson", :email => "jjohnson@example.com"
    end

    context "with matching letters" do
      it "returns a sorted array of results that contain a given letter" do

        expect(Contact.by_letter("J")).to eq([@johnson, @jones])
      end
    end

    context "with non-matching letters" do
      it "should omit contacts that don't match" do
        smith = Contact.create :first_name => "John", :last_name => "Smith", :email => "jsmith@example.com"
        jones = Contact.create :first_name => "Tim", :last_name => "Jones", :email => "tjones@example.com"
        johnson = Contact.create :first_name => "John", :last_name => "Johnson", :email => "jjohnson@example.com"

        expect(Contact.by_letter("J")).to_not include([@smith])
      end
    end
  end

end
