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
  var result = [];
  //basically recursively decide whether to include the current element or not
  //2^n operations
  const subset = (arr, i) => {
    if (i === arr.length) {
      result.push(arr);
    } else {
      let withEl = arr.slice();
      subset(withEl.slice(), i+1);
      withEl.splice(i, 1);
      subset(withEl.slice(), i);
    }
  };

  subset(input, 0);

  return result;
};

console.log(subsetter([1, 2, 3]));
