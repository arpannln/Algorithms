# Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
#
# Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?
#
# Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.


#first solution why doesnt this work
a = gets.strip
b = gets.strip

hashA = Hash.new(0)
hashB = Hash.new(0)

a.each_char do |char|
    hashA[char] += 1
end

b.each_char do |char|
    hashB[char] += 1
end
count = 0
hashB.keys.each do |el|
    count += hashB[el] - hashA[el]
end

hashA.keys.each do |el|
    count += hashA[el] - hashB[el]
end

p count

#correction, but can we do better?

a = gets.strip
b = gets.strip

hashA = Hash.new(0)
hashB = Hash.new(0)

a.each_char do |char|
    hashA[char] += 1
end

b.each_char do |char|
    hashB[char] += 1
end
count = 0
hashB.keys.each do |el|
    next if hashB[el] - hashA[el] < 0 #could save this operation in a variable
    count += hashB[el] - hashA[el]
end

hashA.keys.each do |el|
    next if hashA[el] - hashB[el] < 0
    count += hashA[el] - hashB[el]
end

p count
