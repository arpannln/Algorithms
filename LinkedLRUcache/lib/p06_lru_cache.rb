require_relative 'p05_hash_map'
require_relative 'p04_linked_list'

class LRUCache
  attr_reader :count
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
  end

  def count
    @map.count
  end

  def get(key)
    node = @map.get(key)
    if node
      update_node!(node)
    else
      eject! if count == @max
      calc!(key)
    end


  end

  def to_s
    "Map: " + @map.to_s + "\n" + "Store: " + @store.to_s
  end

  private

  def calc!(key)
    # suggested helper method; insert an (un-cached) key
    val = @prc.call(key)
    node = @store.append(key, val)
    @map[key] = node
    val
  end

  def update_node!(node)
    # suggested helper method; move a node to the end of the list
    node.remove
    last = @store.last
    tail = last.next

    node.next = tail
    node.prev = last

    last.next = node
    tail.prev = node

    node.val
  end

  def eject!
    oldest = @store.first
    @map.delete(oldest.key)
    oldest.remove
  end
end
