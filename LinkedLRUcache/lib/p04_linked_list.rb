class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    @prev.next = @next if @prev && @next
    @next.prev = @prev if @prev && @next
  end
end

class LinkedList
  include Enumerable
  
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
    @first = @head
    @last = @tail
  end

  def [](i)
    each_with_index { |node, j| return node if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @last.prev
  end

  def empty?
    @tail.prev == @head
  end

  def get(key)
    crawler = @head.next
    until crawler == @tail
      return crawler.val if crawler.key == key
      crawler = crawler.next
    end
    nil
  end

  def fetchNode(key)
    crawler = @head.next
    until crawler == @tail
      return crawler if crawler.key == key
      crawler = crawler.next
    end
    nil
  end

  def include?(key)
    get(key) ? true : false
  end

  def append(key, val)
    insert = Node.new(key, val)
    insert.next = @tail
    insert.prev = @tail.prev
    @tail.prev.next = insert
    @tail.prev = insert
  end

  def update(key, val)
    updated = fetchNode(key)
    return nil unless updated
    updated.val = val
  end

  def remove(key)
    target = fetchNode(key)
    target.prev.next = target.next
    target.next.prev = target.prev
  end

  def each(&prc)
    crawler = @head.next
    until crawler == @tail
      prc.call(crawler)
      crawler = crawler.next
    end

  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, node| acc << "[#{node.key}, #{node.val}]" }.join(", ")
  # end
end
