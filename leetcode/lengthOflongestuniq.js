var lengthOfLongestSubstring = function(s) {
    var longest = "";
    var seen = {};
    var temp = "";

    for (var i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            if (temp.length > longest.length) longest = temp;
            console.log(temp);
            temp = s[i];
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

console.log(lengthOfLongestSubstring("dvdf"));
