var lengthOfLongestSubstring = function(s) {
    var longest = "";
    var seen = {};
    var temp = "";

    for (var i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            if (temp.length > longest.length) longest = temp;
            temp.splice(temp.indexOf(s[i]), 1);
            console.log(temp);
            seen = {};
            seen[s[i]] = true;
        } else {
            temp += s[i];

            seen[s[i]] = true;
            if (temp.length > longest.length && i === s.length - 1) longest = temp;
        }
    }

    return longest.length;
};
// FUCK ME MAN
console.log(lengthOfLongestSubstring("dvdf"));

// CHECK IF THE FIRST ELEMENT WAS THE ONE WE SAW AGAIN IF SO
//THEN WE JUST DROP FIRST LETTER ELSE WE GO ON
