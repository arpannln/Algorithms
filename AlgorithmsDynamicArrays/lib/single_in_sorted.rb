def single_in_sorted(arr)
  return arr[0] if arr.length == 1

  middle = arr.length/2
  left = arr.take(middle)
  right = arr.drop(middle)

  if left.last != right.first
    left.length % 2 === 1 ? single_in_sorted(left) : single_in_sorted(right)
  else
    right.length % 2 === 1 ? single_in_sorted(right) : single_in_sorted(left)
  end
end
