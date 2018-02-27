# Implement a queue with #enqueue and #dequeue, as well as a #max API,
# a method which returns the maximum element still in the queue. This
# is trivial to do by spending O(n) time upon dequeuing.
# Can you do it in O(1) amortized? Maybe use an auxiliary storage structure?

# Use your RingBuffer to achieve optimal shifts! Write any additional
# methods you need.

require_relative 'ring_buffer'

class QueueWithMax
  attr_accessor :store
  attr_reader :length

  def initialize
    @store = RingBuffer.new

    @length = 0
  end

  def enqueue(val)

    @store.push(val)
    @length += 1
  end

  def dequeue
    raise "index out of bounds" if @length == 0
    @length -= 1
    @store.shift
  end

  def max
    greatest = nil
    temp = @store
    @length.times do
      last = temp.pop
      if greatest == nil || last > greatest
        greatest = last
      end
    end
    greatest
  end




end
