// Given an array nums of integers, you can perform operations on the array.
//
// In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.
//
// You start with 0 points. Return the maximum number of points you can earn by applying such operations.
//
// Example 1:
// Input: nums = [3, 4, 2]
// Output: 6
// Explanation:
// Delete 4 to earn 4 points, consequently 3 is also deleted.
// Then, delete 2 to earn 2 points. 6 total points are earned.
// Example 2:
// Input: nums = [2, 2, 3, 3, 3, 4]
// Output: 9
// Explanation:
// Delete 3 to earn 3 points, deleting both 2's and the 4.
// Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
// 9 total points are earned.
// Note:
//
// The length of nums is at most 20000.
// Each element nums[i] is an integer in the range [1, 10000].

var deleteAndEarn = function(nums) {
    let max = Math.max(...nums);
    let counter = new Array(max + 1);
    counter.fill(0);


    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] += 1;
    }
    
    let odd = 0;
    let even = 0;

    for (let i = 0; i < counter.length; i++) {
        if ( i % 2 === 0 ) {
            even += counter[i] * i;
        } else {
            odd += counter[i] * i;
        }
    }

    return odd > even ? odd : even;


};
