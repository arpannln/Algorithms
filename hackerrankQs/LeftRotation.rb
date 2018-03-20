# Sample Input
#
# 5 4
# 1 2 3 4 5
# Sample Output
#
# 5 1 2 3 4

n,k = gets.strip.split(' ')
n = n.to_i
k = k.to_i
a = gets.strip
a = a.split(' ').map(&:to_i)

(1..k).each do |i|
    temp = a[0]
    (0..(n - 1)).each do |j|
        if (j == n - 1)
            a[j] = temp
            break
        end
        a[j] = a[j+1]
    end
end

puts a.join(" ")

#We can do better!

n,k = gets.strip.split(' ')
n = n.to_i
k = k.to_i
a = gets.strip
a = a.split(' ').map(&:to_i)
b = []

(0..n - 1).each do |i|
    final = (i + (a.length - k)).abs % (a.length)
    b[final] = a[i]
end

puts b.join(" ")
