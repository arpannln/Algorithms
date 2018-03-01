require_relative 'heap'

def k_largest_elements(array, k)
  array.heap_sort!.reverse[0...k]
end
