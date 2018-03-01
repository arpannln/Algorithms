require_relative "heap"
require_relative "heap_sort"

class Array
  def heap_sort!

    (2..length).each do |idx|
      BinaryMinHeap.heapify_up(self, idx - 1, idx)
    end

    (2..length).to_a.reverse.each do |idx|
      self[idx - 1], self[0] = self[0], self[idx - 1]
      BinaryMinHeap.heapify_down(self, 0, idx - 1)
    end

    self.reverse!
  end
end
