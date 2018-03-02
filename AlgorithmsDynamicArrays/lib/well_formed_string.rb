def well_formed?(str)
  punctuation = {
    "}" => "{",
    "]" => "]",
    ")" => "("
  }

  stack = []

  str.chars.each do |char|
    if punctuation.values.include?(char)
      if stack.empty? || stack.last != punctuation[char]
        return false
      else
        stack.pop
      end
    else
      stack.push(char)
    end

  end

  return false if !stack.empty?
  return true
end
