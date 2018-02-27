require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @capacity = 8
    @length = 0
    @start_idx = 0
    @store = StaticArray.new(8)
  end

  # O(1)
  def [](index)
    raise "index out of bounds" if index > @length - 1
    @store[(index + @start_idx) % @capacity]
  end

  # O(1)
  def []=(index, val)
    raise "index out of bounds" if index > @length - 1
    @store[(index + @start_idx) % @capacity] = val
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    last = @store[(@length - 1 + @start_idx) % @capacity]
    @length -= 1
    last
  end

  # O(1) ammortized
  def push(val)
    resize! if @length == @capacity
    @store[(@length + @start_idx) % @capacity] = val
    @length += 1

  end

  # O(1)
  def shift
    raise "index out of bounds" if @length == 0
    first = @store[@start_idx]
    @start_idx += 1
    @length -= 1

    first
  end

  # O(1) ammortized
  def unshift(val)
    resize! if @length == @capacity
    @length += 1
    @start_idx -= 1
    @store[@start_idx] = val
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
  end

  def resize!
    old = @store
    new_capacity = @capacity * 2
    @store = StaticArray.new(new_capacity)
    (0...@length).each do |idx|
      @store[idx] = old[(idx + @start_idx) % capacity]
    end

    @start_idx = 0
    @capacity = new_capacity

  end
end
