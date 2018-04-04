#use 2 sum on each of the elements for 3 sum

def two_sum(nums, target)
    future = {}

    nums.each_with_index do |num, idx|
        if (future[num])
            return [future[num], idx]
        end
        future[target - num] = idx
    end

end

def three_sum(nums, target)

end
