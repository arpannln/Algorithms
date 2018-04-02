def two_sum(nums, target)
    future = {}

    nums.each_with_index do |num, idx|
        if (future[num])
            return [future[num], idx]
        end
        future[target - num] = idx
    end

end
