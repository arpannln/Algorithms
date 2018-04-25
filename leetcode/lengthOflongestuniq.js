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

var lengthOfLongestSubstring = function(s) {
  if (s === null) {
    return 0;
  }
  if (s.length <= 1) {
    return s.length;
  }

  let longest = 1;
  let i = 0;
  let j = 1;

  while (j < s.length) {
    if (s.slice(i, j).indexOf(s[j]) >= 0) {
      i += s.slice(i, j).indexOf(s[j]) + 1;
    } else {
      longest = Math.max(j - i + 1, longest);
    }

    j++;
  }

  return longest;
};
console.log(lengthOfLongestSubstring("dvdf"));

// CHECK IF THE FIRST ELEMENT WAS THE ONE WE SAW AGAIN IF SO
//THEN WE JUST DROP FIRST LETTER ELSE WE GO ON
