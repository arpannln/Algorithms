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
