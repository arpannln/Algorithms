//[1, 2, 3] => [1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]

 const permutator = (inputArr) => {
   let result = [];
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
