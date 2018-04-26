// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbddadddda"
// Output: "bb"

// ok so for every point we want to check odd palindromes as well as even


const longestPalindromeSubstring = (s) => {
  let longest = s.charAt(0);
  let start, last;

  //lets go through even solutions
  for (let i = 1; i < s.length; i++) {
    start = i - 1;
    last = i;

    for (let j = 0; j < s.length - i; j++) {
      if (s.charAt(start) === s.charAt(last)) {
        let word = s.slice(start, last + 1);
        if (word.length > longest.length) longest = word;
      } else {
        break;
      }

      start++;
      last--;
    }
  }

  // odd solutions

  for (let i = 1; i < s.length; i++) {
    start = i - 1;
    last = i + 1;

    for (let j = 0; j < s.length - i; j++) {
      if (s.charAt(start) === s.charAt(last)) {
        let word = s.slice(start, last + 1);
        if (word.length > longest.length) longest = word;
      } else {
        break;
      }

    start++;
    last--;
    }
  }

  return longest;
};
