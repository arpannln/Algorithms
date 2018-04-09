//two inputs
//first input - large hash mapping strings to list of possible n-grams used to refer to the game
//e.g.
        // {
        // "CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
        // "Fortnite": ["Fortnite", "Fort Nite"],
        // "Destiny": ["Destiny", "original Destiny game"],
        // "Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
        // "WorldOfWarcraft": ["WoW the game", "world of warcraft"],
        // }
//second input - large array of sentences
//e.g.
        //   ["I liked the last Destiny game, now I play Fortnite",
        // "Lol, no comment about that",
        // ...,
        // "I'm still playing world of warcraft since ww2"]
//output -
        // ["I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}",
        // "Lol, no comment about that",
        // ...,
        // "I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"]


// Note: “CallOfDutyWW2”, must be represented in the final text as TAG{GameID,original
// text}, e.g. TAG{CallOfDutyWW2,Call of Duty world war two}.

// Problem-simplified: need to parse through all the strings in the array and "discover"
// any n-grams (does letter case count?) and then replace the n-gram with the respective gameID as well as the
// trigger n-gram. (what if different n-grams overlap with each other?)

// Initial-solution-plan:
//    Create a reverse hash from the n-grams which would point to gameId
//      e.g. {"Call of Duty world war two": "CallOfDutyWW2", }
//    Iterate through sentences, locating any possible n-gram (this sounds quite expensive)
//
// Approach:


  function gameDetector (grams, sentences) {
    var gameID = {};
    // make our reverse hash for quick lookup (tailored to be case insensitive)
    for (let key in grams) {
      grams[key].forEach( (gram) => gameID[gram.toLowerCase()] = key)
    }
    var result = [];
    // go through our sentences and split them into words and check all the different combinations
    // for our n-grams
    sentences.forEach ( (sentence) =>
      {
        var words = sentence.split(" ");
        var changed = "";
        for (let i = 0; i < words.length; i++ ) {
          var phrase = words[i];
          for (let j = i + 1; j < words.length+1; j++) {
            //punctuation checker
            var punctuationCheck = removePunctuation(phrase);
            var withoutPunctuation = punctuationCheck[0]; // our phrase without punctuation
            var removed = punctuationCheck[1]; // our punctuation we need to append
            if (gameID[withoutPunctuation.toLowerCase()]) { //if we find case-insensitive form of ngram
              //use splice to replace the words in the n-gram with our tagged version
              words.splice(i, j - i, taggify(gameID[withoutPunctuation.toLowerCase()], withoutPunctuation) + removed);
            }
            phrase += " " + words[j];
          }
        }
        result.push(words.join(" "));
      }

    );
    return result;
  }

  //function to convert our ngram and gameID to proper notation
  function taggify (gameID, ngram) {
    return `TAG{${gameID},${ngram}}`;
  }

  //function to remove punctuation before we check to see if the phrase is in our hash
  //was refactored to handle consecutive punctuation
  //send back punctuation so we can append to our sentence after
  const PUNCTUATION = ".,:;'?!".split("");

  function removePunctuation(phrase) {
    var punctuation = "";
    while (PUNCTUATION.indexOf(phrase.slice(-1)) !== -1) {
      punctuation = phrase.slice(-1) + punctuation;
      phrase = phrase.slice(0, phrase.length-1);
    }

    return [phrase, punctuation];
  }

  //Time complexity discussion:
  // making our new hash is an operation of n, but this will be largely overshadowed by the following operations
  // going through each sentence is an operation of n
    // within this operation we run through every combination of sequential words adding n^2 operations
    // for every sentence
        //within these nested loops we have two operations that have a worst case of O(n) - removePunctuation and splice
  // this brings our time complexity to O(n^4) (there is a large amount of unrecognized saved time because we traverse words rather than characters)

  module.exports.gameDetector = gameDetector;
