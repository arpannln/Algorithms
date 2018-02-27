require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @capacity = 8
    @length = 0
    @store = StaticArray.new(@capacity)

  end

  # O(1)
  def [](index)
    raise "index out of bounds" if index > @length - 1
    @store[index]
  end

  # O(1)
  def []=(index, value)
    raise "index out of bounds" if index > @length - 1
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    @length -= 1
    @store[length]
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @length === @capacity
    @length += 1
    @store[@length - 1] = val
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0
    @length -= 1
    first = @store[0]
    (0...length).each do |idx|
      @store[idx] = @store[idx + 1]
    end
    first
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    (1..@length).to_a.reverse.each do |idx|
      @store[idx] = @store[idx - 1]
    end
    @length += 1
    @store[0] = val
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    old = @store
    @capacity = @capacity * 2
    @store = StaticArray.new(@capacity)
    (0...@length).each do |idx|
      @store[idx] = old[idx]
    end
  end
end
