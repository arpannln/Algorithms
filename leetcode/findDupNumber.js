// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
//
// Note:
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.
// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
// nlogn approach?
//examples [1, 2, 3, 3], [1, 2, 2, 3]

//initial tackle
var findDuplicate = function(nums) {
    //total sum has to be like median * 2n
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let totalExpectedSum;

    if (nums.length % 2 === 0) {
        totalExpectedSum = (max * (max + 1))/2;
    } else {
        totalExpectedSum = (max * max)/2;
    }

    console.log(totalExpectedSum);

    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    let overflow = nums.length + 1 - max;

    let result = (actualSum - totalExpectedSum) / overflow;

    return result;
};
const findDup = (inputArr) => {
  //sum up all the elements
  let sum = 0;

  for (let i = 0; i < inputArr.length; i++) {

  }
};
