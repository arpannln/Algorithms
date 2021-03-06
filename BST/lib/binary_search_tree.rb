# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper me
require 'bst_node.rb'

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value) #need helper because cant change root if recursive way
    @root = self.class.insert!(@root, value)
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
    if @root.value == value && @root.right == nil && @root.left == nil
      @root = nil
      return
    end
    self.class.delete!(@root, value)

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

  def self.find_max(node)
    return nil unless node
    return node if node.right == nil
    find_max(node.right)
  end

  def self.delete_max!(node)
    return nil unless node
    return node.left unless node.right

    node.right = delete_max!(node.right)
    node
  end


  def self.delete!(node, value)
    # if (child.value != value && child.left && value < child.value)
    #   parent_pointer = child.left
    #   delete!(parent_pointer, , value)
    # elsif (child.value != value && child.right && value > child.value)
    #   parent_pointer = child.right
    #   child.right.delete!(parent_pointer, value)
    # elsif (child.value == value && child.left == nil && child.right == nil)
    #   parent_pointer = nil
    # elsif (child.value == value && child.left != nil)
    #   parent = child
    # elsif (child.value == value && child.right != nil)
    #   parent = child
    # end
    return nil unless node

    if (node.value == value)
      return node.right unless node.left
      return node.left unless node.right

      move = find_max(node.left) #find max node on left subtree and delete this node after pulling its info
      move.left = delete_max!(node.left)
      move.right = node.right
      return move
    elsif value < node.value
      node.left = delete!(node.left, value)
    else
      node.right = delete!(node.right, value)
    end

    node

  end
end
