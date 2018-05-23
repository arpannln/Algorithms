// const subsetter = (inputArr) => {
//
//   let result = [];
//   //for every element in the array, make a decision to include it or not;
//   const subset = (arr, i) => {
//     if (i === arr.length) {
//       result.push(arr);
//     } else {
//       let copy = arr.slice();
//       subset(copy.slice(), i + 1);
//       copy.splice(i, 1);
//       subset(copy.slice(), i);
//     }
//   };
//
//   subset(inputArr, 0);
//
//   return result;
// };

const subsetter = (inputArr) => {

  let result = [];
  //for every element in the array, make a decision to include it or not;
  const subset = (arr, accum = []) => {
    if (arr.length === 0) {
      result.push(accum);
    } else {
      subset(arr.slice(1), accum.concat([arr[0]]));
      subset(arr.slice(1), accum);
    }
  };

  subset(inputArr);

  return result;
};

console.log(subsetter([1, 2, 3]));
