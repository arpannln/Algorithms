// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 0, 15, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// const moveZerosToBack = (arr) => {
//   let end = arr.length - 1;
//   //check if there are zeros hiding in the back
//
//
//   if (end === 0) {return arr;}
//
//   let runner = 0;
//   while (runner < end) {
//     if (arr[end] === 0) {
//       end--;
//       if (end === 0) {return arr;}
//       continue;
//     }
//
//     if (arr[runner] === 0) {
//       [arr[runner], arr[end]] = [arr[end], arr[runner]];
//       end--;
//     }
//     runner++;
//   }
//
//   return arr;
// };
//
// const moveZeroes = (arr) => {
//   let end = arr.length - 1;
//   for (let i = 0; i < end; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//       i--;
//       end--;
//     }
//   }
// };
const moveZeroes = (arr) => {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
      arr.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < counter; i++) {
    arr.push(0);
  }

  return arr;
};

console.log(moveZerosToBack([0, 1, 0, 0, 15, 0, 3, 12]));
