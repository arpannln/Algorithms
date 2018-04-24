// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 0, 15, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveArraysToBack = (arr) => {
  let end = arr.length - 1;
  //check if there are zeros hiding in the back
  while (arr[end] === 0) {
    end--;
  }

  if (end === 0) {return arr;}

  let runner = 0;
  while (runner < end) {
    if (arr[end] === 0) {
      end--;
      continue;
    }
    if (arr[runner] === 0) {
      [arr[runner], arr[end]] = [arr[end], arr[runner]];
      end--;
    }
    runner++;
  }

  return arr;
};


console.log(moveArraysToBack([0, 1, 0, 0, 15, 0, 3, 12]));
