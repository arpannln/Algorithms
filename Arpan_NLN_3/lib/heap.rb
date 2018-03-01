class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    @prc = prc
  end

  def count
    @store.length
  end

  def extract
    min = @store[0]
    @store[count - 1], @store[0] = @store[0], @store[count - 1]
    @store.pop
    self.class.heapify_down(@store, 0, &@prc)
    min
  end

  def peek
    @store[0]
  end

  def push(val)
    @store << val
    self.class.heapify_up(@store, count - 1, &@prc)
  end

  public
  def self.child_indices(len, parent_index)
    first = (parent_index * 2) + 1
    second = (parent_index * 2) + 2

    [first, second].select { |idx| idx < len }
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    children = child_indices(len, parent_idx)  #check if we need this check or not
    first, second = children

    return array if children.all? { |child_idx| prc.call(array[parent_idx], array[child_idx]) <= 0 }

    smaller_idx = first

    unless children.length == 1
      smaller_idx = prc.call(array[first], array[second]) == -1 ? first : second
    end

    array[parent_idx], array[smaller_idx] = array[smaller_idx], array[parent_idx]
    heapify_down(array, smaller_idx, len, &prc)
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    return array if child_idx == 0
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }

    parent_idx = parent_index(child_idx)
    return array if prc.call(array[child_idx], array[parent_idx]) == 1
    array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
    heapify_up(array, parent_idx, len, &prc)
  end
end
