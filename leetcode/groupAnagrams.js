/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var groupAnagrams = function(strs) {
    //square the numeric value of the number and add them together to get some sort of "unique"
    //numeric value
    let anagrams = {};
    for (let i = 0; i < strs.length; i++) {
        let word = sorted(strs[i]);
        if (anagrams[word]) {
            anagrams[word].push(strs[i]);
        } else {
            anagrams[word] = [strs[i]];
        }
    }

    return Object.values(anagrams);
};

const sorted = (word) => {
    return word.split("").sort().join("");
};
