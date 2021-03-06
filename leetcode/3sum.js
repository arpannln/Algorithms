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

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (future[current]) {
            result.push([current, target - current, -target]);
        } else {
            future[target - current] = true;
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//so the above solution returns hella combos, unlucky
//try sorting maybe

// shortly later realized that indexOf does not work with nested arrays thats hella dumb...
//tried this where we delete the dups after we find solutions but this breaks for all 0's -.-
var threeSum = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
       let current = nums[i];
       nums.splice(i, 1);
       let results = twoSum(nums, -current);
       console.log(result);
       if (!result.includes(results) && results.length !== 0) {
           result = result.concat(results);
       }

       //delete dups after
       let dupIndex = nums.indexOf(current);
       while (dupIndex > -1) {
           nums.splice(dupIndex, 1);
           dupIndex = nums.indexOf(current);
       }
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
            result.push([current, target - current, -target].sort());
        } else {
            future[target - current] = true;
        }
    }
    return result;
};
