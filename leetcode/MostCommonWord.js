// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
//
// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase


const mostCommonWord = function (para, banned) {

  var count = {};
  var ban = {};
  para = para.replace(/[.,'?]/g, "");
  var words = para.split(" ");


  banned.forEach( (el) => {
    ban[el] = true ;
  });

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (ban[word]) continue;
    if (count[word]) {
      count[word] ++;
    } else {
      count[word] = 1;
    }
  }

  var longest = null;

  for (let word in count) {
    if (!longest || count[word] > count[longest]) {
      longest = word;
    }
  }

  return longest;
};
