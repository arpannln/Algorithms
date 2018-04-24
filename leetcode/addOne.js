/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   let carryOver = 0;
   for (let i = digits.length - 1; i >= 0; i--) {
       if (digits[i] === 9) {
           digits[i] = 0;
           carryOver = 1;
           if (i === 0) {
               digits.unshift(1);
           }
       } else if (i === digits.length - 1) {
           digits[i] += 1;
           break;
       } else {
           digits[i] += carryOver;
           break;
       }
   }
    
    return digits;
};
