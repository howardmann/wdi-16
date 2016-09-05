require 'pry' # Used to require a gem
require_relative "../bank.rb" # Used to require a file you created

# describe - group of tests
# contet - state (e.g logged in)
# it - individual test

describe Bank do
  let(:b) do
    Bank.new("Rspec Bank")
  end

  describe ".new" do
    # We should be able to create a Bank
    it "should create a new instance of the Bank class" do
      # 1. setup
      b = Bank.new("RSpec Bank")
      # 2. execute (optional)
      # 3. validate
      expect(b).to_not eq(nil)
      # 4. cleanup
    end
    # We should be able to give a bank a name
    it "should be assigned a name as an instance variable" do
      b = Bank.new("RSpec Bank")
      expect(b.name).to eq("RSpec Bank")
    end
    # A bank should have many accounts
    it "should have no accounts" do
      expect(b.accounts.count).to eq 0
    end
  end

  describe "#create_account" do
    it "should create an account with a given name and a given deposit" do
      b.create_account("Gerry", 200)
      expect(b.balance("Gerry")).to eq 200
    end
  end

  describe "#withdraw" do
    it "should withdraw an amount from a customer's account" do
      # Setup
      # Execution
      b.create_account "Gerry", 200
      b.withdraw("Gerry", 100)
      # Validation
      expect(b.balance("Gerry")).to eq 100
    end

    it "should ignore withdrawal requests exceeding the current balance" do
      b.create_account "Gerry", 200
      b.withdraw("Gerry", 1_000_000)
      expect(b.balance("Gerry")).to eq 200
    end
  end

  describe "#deposit" do
    it "should deposit a given amount into a customer's account" do
      b.create_account "Gerry", 200
      b.deposit "Gerry", 200
      expect(b.balance("Gerry")).to eq 400
    end
  end

  describe "#delete_account" do
    it "should delete an account with a given customer name" do
      b.create_account "Gerry", 200
      b.delete_account("Gerry")
      expect(b.accounts["Gerry"]).to eq nil
    end
  end

end


# We should be able to withdraw money and deposit money
