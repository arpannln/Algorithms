//
// Given a list of positive integers, the adjacent integers will perform the float division. For example, [2,3,4] -> 2 / 3 / 4.
//
// However, you can add any number of parenthesis at any position to change the priority of operations. You should find out how to add parenthesis to get the maximum result, and return the corresponding expression in string format. Your expression should NOT contain redundant parenthesis.

//use math to make this much easier.

const optimalDivision =  (nums) => {
  if (nums.length === 0) {
    return "";
  }
  if (nums.length === 1) {
    return nums[0] + "";
  }
  if (nums.length === 2) {
    return nums[0] + "/" + nums[1];
  }
  let result = nums[0] + "/(";
  for (let i = 1; i < nums.length - 1; i++) {
    result += nums[i] + "/";
  }

  return result + nums[nums.length-1] + ")";
};
