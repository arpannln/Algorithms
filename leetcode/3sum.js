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


    }
};

var twoSum = function(nums, external, target) {
    let result = [];
    let future = {};

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (future[target - current]) {
            result.concat([current, target - current]);
        } else {
            future[current] = true;
        }
    }
};
