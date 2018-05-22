// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets

// /**
// * @param {number[]} nums
// * @return {number[][]}
// */
var threeSum = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
       let current = nums[i];
       let copy = nums.slice();
       copy.splice(i, 1);
       result.push(twoSum(copy, -current));
    }

    return result;
};

var twoSum = function(nums, target) {
    let result = [];
    let future = {};
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        console.log(current);
        if (future[current]) {
            result.push([current, target - current, -target]);
        } else {
            future[target - current] = true;
        }
    }
    console.log(result);
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
