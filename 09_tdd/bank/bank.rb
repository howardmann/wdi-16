require 'pry'

class Bank
  attr_reader :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, balance)
    @accounts[name] = balance
  end

  def balance(name)
    @accounts[name]
  end

  def withdraw(name, amount)
    unless amount > @accounts[name]
      @accounts[name] -= amount
    end
  end

  def deposit(name, amount)
    @accounts[name] += amount
  end

  def delete_account(name)
    @accounts.delete(name)
  end

end
