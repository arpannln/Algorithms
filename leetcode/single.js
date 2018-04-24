//Given a non-empty array of integers, every element appears twice except for one. Find that single one

//first solution
var singleNumber = function(nums) {
    let survivor = {};
    for (let i = 0; i < nums.length; i++) {
       survivor[nums[i]] ? delete survivor[nums[i]] : survivor[nums[i]] = true;
    }

    return Number(Object.keys(survivor)[0]);
};

//better.. use ^ to inverse bit of number

var singleNumber = function(nums) {
    let length = nums.length;

    if(length < 2) return nums[0];

    let result = 0;

    for(let i = 0; i < length; i++) {
        result ^= nums[i];
    }

    return result;
};
