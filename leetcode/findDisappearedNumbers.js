// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements of [1, n] inclusive that do not appear in this array.
//
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]
// ughhhh ok so negative numbers is a solution you can use to maintain the vvalue there
//without losing the actual value.. I was going and setting stuff to false and bouncing around the array
//but this is way neater MAANNNN 
var findDisappearedNumbers = function(nums) {
    let n = 0;
    let index;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        index = Math.abs(nums[i]) -1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;

};
