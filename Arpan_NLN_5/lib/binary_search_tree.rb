# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper me
require 'bst_node.rb'

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value) #need helper because cant change root if recursive way
    if @root
      self.class.insert!(@root, value)
    else
      @root = BSTNode.new(value)
    end
  end

  def find(value, tree_node = @root)
    return nil unless tree_node
    if tree_node.value == value
      return tree_node
    elsif value < tree_node.value
      find(value, tree_node.left)
    else
      find(value, tree_node.right)
    end
  end

  def delete(value)
    return nil unless @root
    @root.class.delete!(parent = @root, value)

  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return tree_node if tree_node.right == nil
    maximum(tree_node.right)
  end

  def depth(tree_node = @root)
    return -1 if tree_node == nil
    left = 1 + depth(tree_node.left)
    right = 1 + depth(tree_node.right)

    left > right ? left : right
  end

  def is_balanced?(tree_node = @root)
    depth(tree_node.right) == depth(tree_node.left)
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return if tree_node == nil
    in_order_traversal(tree_node.left, arr)
    arr << tree_node.value
    in_order_traversal(tree_node.right, arr)
    arr
  end


  private
  # optional helper methods go here:

  def self.insert!(node, value)
    if node.nil?
      return BSTNode.new(value)
    elsif value <= node.value
      node.left = insert!(node.left, value)
    else
      node.right = insert!(node.right, value)
    end

    node
  end

  def self.delete!(parent_pointer, value)
    if (self.value != value && self.left)
      parent_pointer = self
      self.left.delete!(parent_pointer, value)
      

    if (self.value == value && self.left == nil && self.right == nil)
      parent_pointer

    elsif (self.value == value && self.left != nil)

    elsif (self.value == value && self.right != nil)



  end
end
