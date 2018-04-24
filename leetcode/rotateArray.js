// Rotate an array of n elements to the right by k steps.
//
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
//
// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//
// [show hint]
//
// Hint:
// Could you do it in-place with O(1) extra space?
//
// Related problem: Reverse Words in a String II
//
// Credits:
// Special thanks to @Freezen for adding this problem and creating all test cases.

//
// var rotate = function(nums, k) {
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
// };

//shit solution
// damn look at how sexy this one looks 

var rotate = function(nums, k) {
   let right = nums.splice(0, k + 1);
   nums.splice(k+1, 0, ...right);
};
