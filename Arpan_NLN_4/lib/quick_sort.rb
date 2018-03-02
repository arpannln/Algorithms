class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length < 2
    pivot = array[0]

    left = []
    right = []

    array.drop(1).each do |el|
      if el < pivot
        left << el
      else
        right << el
      end
    end

    sort1(left) + [pivot] + sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    return array if length < 2
    pivot = partition(array, start, length, &prc)

    left = pivot - start
    right = length - 1 - left

    sort2!(array, 0, left, &prc)
    sort2!(array, pivot + 1, right, &prc)

    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }

    part = start + 1
    (part...(start + length)).each do |idx|
      next if prc.call(array[start], array[idx]) <= 0
      array[part], array[idx] = array[idx], array[part]
      part += 1
    end

    pivot = part - 1
    array[start], array[pivot] = array[pivot], array[start]
    pivot
  end
end
