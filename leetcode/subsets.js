const subsetter = (inputArr) => {

  let result = [];
  //for every element in the array, make a decision to include it or not;
  const subset = (arr, i) => {
    if (i === arr.length) {
      result.push(arr);
    } else {
      let copy = arr.slice();
      subset(copy.slice(), i + 1);
      copy.splice(i, 1);
      subset(copy.slice(), i);
    }
  };

  subset(inputArr, 0);

  return result;
};


console.log(subsetter([1, 2, 3]));
