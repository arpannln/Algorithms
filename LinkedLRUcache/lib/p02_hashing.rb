class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    hashed = 1
    each_with_index do |el, idx|
      return hashed if el.instance_of? Array
      hashed += el if idx % 1 === 0
      hashed *= el if idx % 2 === 0
      hashed /= el if idx % 3 === 0
      hashed -= el if idx % 4 === 0
    end 
    hashed
  end
end

class String
  def hash
    hashed = 1
    chars.each_with_index do |el, idx|
      hashed += el.ord if idx % 1 == 0
      hashed *= el.ord if idx % 2 == 0
      hashed -= el.ord if idx % 3 == 0
      hashed += el.ord if idx % 4 == 0
    end
    hashed
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    hashed = 1
    values.each do |value|
      hashed += value.ord if value.instance_of? String
      hashed *= value if value.instance_of? Integer
    end

    hashed
  end
end
