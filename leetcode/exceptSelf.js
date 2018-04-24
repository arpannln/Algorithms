//shit solution

// var productExceptSelf = function(nums) {
//     var result = [];
//
//     for(let i = 0; i < nums.length; i++) {
//         let copy = nums.slice();
//         copy.splice(i, 1);
//         result.push(product(copy));
//     }
//
//     return result;
// };
//
// const reducer = (accumulater, curr) => accumulater *= curr;
//
// var product = function(nums2) {
//     return nums2.reduce(reducer, 1);
// }

//holy shit this is dope

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = new Array(nums.length);
    let temp = 1;

    //do left side
    for (let i = 0; i < nums.length; i++) {
        result[i] = temp;
        temp *= nums[i];
    }

    //do right side

    temp = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= temp;
        temp *= nums[i];
    }

    return result
};
