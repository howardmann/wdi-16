# # Robot Name
#
# When robots come off the factory floor at Badger Robotics, they have no name.
#
# The first time you boot them up, a random name is generated, such as RX837 or BC811.
#
# In other words, if I say:
#
# ```ruby
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name
#
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
# ```
#
# then robot1 will print the same name 3 times, and robot2 will not have the same name as robot1.
#
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.
#
# if I say:
#
# ```ruby
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# ```
#
# then robot3 will have the same name twice, then we'll get the reset message, then it will get a new name, and print it twice.
#
# All robots have a mac address. The mac address never changes, even if you reset it to factory settings.
#
# ## Extensions
#
# ### Counters
#
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanics doesn't go away. Have your robot track the total number of operations that have been performed on it.
#
# ```ruby
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count # => 5
# ```
#
# ### Robot Time
#
# Number of instructions is important, but so is the total age of the robot.
#
# ```ruby
# robot3 = Robot.new
# puts robot3.timers # => "21 seconds since last boot, 21 seconds since creation"
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.timers # => "8 seconds since last boot, 29 seconds since creation"
# puts robot3.name
# ```
#
# ## Source
# A debugging session with Paul Blackwell.

class Robot
  attr_accessor :mac, :count

  def initialize
    arr = ["RX837","BC811","C3PO", "R2D2", "T1000"]
    # @name = "#{["A".."Z"].to_a.sample(2).join} #{(1..9).to_a.sample(3).join}"
    @name = arr.sample
    @mac = "IEEE 802"
    @count = 0
    @start = Time.now
  end

  def name
    p @name
    @count += 1
  end

  def reset
    p "Resetting to factory settings"
    p @name = "RESET"
    @count += 1
  end

  def instruction_count
    p @count
  end

  def timers
    elapsed_t = (Time.now - @start).to_i
    p "#{elapsed_t} seconds since creation"
  end

end

robot1 = Robot.new
p robot1.name
p robot1.name
p robot1.name

robot2 = Robot.new
p robot2.name
p robot2.name
p robot2.name

robot3 = Robot.new
robot3.name
robot3.name

robot3.reset

robot3.name
p robot3.mac
robot3.instruction_count
robot3.timers
