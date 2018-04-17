//[1, 2, 3] => [1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]

 const permutator = (inputArr) => {
   var result = [];
   //define recursive function here
   const permute = (arr, m=[]) => {
     //nothing left to permute
     if (arr.length === 0) {
       result.push(m);
     } else {
       for (let i = 0; i < arr.length; i++) {
         //lets dupe our arr so we dont mutate it during our loop
         var curr = arr.slice();
         var next = curr.splice(i, 1);

         permute(curr.slice(), m.concat(next));
       }
     }
   };

   permute(inputArr);

   return result;
 };

 console.log(permutator([1,2,3]));

//[1, 2, 3] => [1, 2, 3], [1, 3], [1, 2], [2, 3], [1], [2], [3], []

const subsetter = (inputArr) => {
  var result = [];

  const subset = (arr) => {
    if (arr.length === 0) {
      result.push([]);
    } else {
        if (!result.includes(arr)) {
            result.push(arr);
        }
        for (let i = 0; i < arr.length; i++) {
          var curr = arr.slice();
          curr.splice(i, 1);

          subset(curr.slice());
        }
    }
  };

  subset(inputArr);

  return result;
};

console.log(subsetter([1, 2, 3]));
