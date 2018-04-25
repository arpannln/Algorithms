var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var seen = {};
    let i = 0;

    for(let j = 0; j < s.length; j++) {
      while(seen[s.indexOf(j)]) {
        seen[s.indexOf(i)] = false;
        i++;
      }
      seen[s.indexOf(j)] = true;
      longest = Math.max(longest, j - i + 1);
    }

    return longest;
};
// FUCK ME MAN
console.log(lengthOfLongestSubstring("dvdf"));

// CHECK IF THE FIRST ELEMENT WAS THE ONE WE SAW AGAIN IF SO
//THEN WE JUST DROP FIRST LETTER ELSE WE GO ON
