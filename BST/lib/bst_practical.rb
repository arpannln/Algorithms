require 'binary_search_tree.rb'

def kth_largest(tree_node, k, arr = [])
  return if tree_node == nil || arr.length == k
  kth_largest(tree_node.right, k, arr)
  arr << tree_node
  kth_largest(tree_node.left, k, arr)
  return arr[k - 1]
end
