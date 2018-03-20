#!/bin/ruby

m,n = gets.strip.split(' ')
m = m.to_i
n = n.to_i
magazine = gets.strip
magazine = magazine.split(' ')
ransom = gets.strip
ransom = ransom.split(' ')

if ransom.length > magazine.length
    puts 'No' 
    return
end

ransomHash = Hash.new(0)
magazineHash = Hash.new(0)

ransom.each do |word|
    ransomHash[word] += 1
end

magazine.each do |word|
    magazineHash[word] += 1
end

ransomHash.keys.each do |word|
    if magazineHash[word] < ransomHash[word]
        puts 'No'
        return
    end

end

puts "Yes"
