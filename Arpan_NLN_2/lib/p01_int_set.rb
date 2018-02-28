class MaxIntSet
  def initialize(max)
    @store = Array.new(max)
    @max = max
  end

  def insert(num)
    is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    is_valid?(num)
    @store[num] = nil
  end

  def include?(num)
    @store[num] == true
  end

  private

  def is_valid?(num)
    raise "Out of bounds" if num >= @max || num < 0
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @num_buckets = num_buckets
  end

  def insert(num)
    @store[num % @num_buckets].push(num)
  end

  def remove(num)
    @store[num % @num_buckets].delete(num)
  end

  def include?(num)
    @store[num % @num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count == num_buckets
    @store[num % num_buckets].push(num)
    @count += 1
  end

  def remove(num)
    @store[num % num_buckets].delete(num)
    @count -= 1
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { Array.new }
    @store.each do |arr|
      arr.each do |el|
        new_store[el % (num_buckets * 2)].push(el)
      end
    end
    @store = new_store
  end
end
