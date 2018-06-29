// [1, 5, 8, 12, 17] 30

// start from the end

const makeBetterChange = (inputArr, target) => {
  let result = [[]];

  const makeChange = (arr, targ, accum = []) => {
    if (targ === 0) {
      result.push(accum);
      return;
    }
    if (arr.length === 0) {
      return;
    }
    if (targ < 0) {
      return;
    }
    //we want to fork into 2 here, one where we keep including the last element
    if (targ - arr[arr.length - 1] >= 0) {
      makeChange(arr.slice(0), targ - arr[arr.length - 1], accum.concat([arr[arr.length - 1]]) );
    }
    makeChange(arr.slice(0, arr.length - 1), targ, accum);
    //one where we dont

  };

  makeChange(inputArr, target);

  return result.sort();
};

console.log(makeBetterChange([17, 5, 8, 12, 30], 30));
