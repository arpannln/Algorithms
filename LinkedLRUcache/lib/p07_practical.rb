require_relative 'p05_hash_map'

def can_string_be_palindrome?(string)
  count = HashMap.new(string.length)
  string.chars.each do |char|
    if count.include?(char)
      count.delete(char)
    else
      count.set(char, true)
    end
  end

  return false if count.count > 1
  true
end
