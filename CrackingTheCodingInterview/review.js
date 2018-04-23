const permutator = (input) => {
  var result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        var curr = arr.slice();
        var next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(input);

  return result;
};

console.log(permutator([1, 2, 3]));


const subsetter = (input) => {
  var result = [[]];


  const subset = (arr, m = []) => {
      if (!result.includes(arr)) {
        result.push(arr);
      }
      for (let  i = 0; i < arr.length; i++) {
        var curr = arr.slice();
        curr.splice(i, 1);
        subset(curr.slice());
      }
  };

  return result;
};

console.log(subsetter([1, 2, 3]));
