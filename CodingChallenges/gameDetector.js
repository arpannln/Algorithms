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


  function gameDetectorOriginal (grams, sentences) {
    // make our reverse hash for quick lookup
    var gameID1 = ngramToGameID(grams);
    var result = [];
    // go through our sentences and split them into words and check all the different combinations
    // for our n-grams
    sentences.forEach ( (sentence) =>
      {
        var words = sentence.split(" ");

        for (let i = 0; i < words.length; i++ ) {
          var phrase = words[i];

          for (let j = i + 1; j < words.length+1; j++) {
            //punctuation checker
            var punctuationCheck = removePunctuation(phrase);
            var withoutPunctuation = punctuationCheck[0]; // our phrase without punctuation
            var removed = punctuationCheck[1]; // our punctuation we need to append

            if (gameID1[withoutPunctuation]) { //if we find  ngram
              //use splice to replace the words in the n-gram with our tagged version so we avoid rechecks
              words.splice(i, j - i, taggify(gameID1[withoutPunctuation], withoutPunctuation) + removed);
            }

            phrase += " " + words[j];
          }
        }
        result.push(words.join(" "));
      }

    );
    return result;
  }
  // function that hashes our ngrams to our gameIDs to improve efficiency of lookup cost
  function ngramToGameID (grams) {
    let gameID = {};
    for (let key in grams) {
      grams[key].forEach( (gram) => gameID[gram] = key);
    }
    return gameID;
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
  // making our new hash  will be largely overshadowed by the following operations
  // going through each sentence is an operation of n
    // within this operation we run through every combination of sequential words adding n^2 operations
    // for every sentence
        //within these nested loops we have two operations that have a worst case of O(n) - removePunctuation and splice
  // this brings our time complexity to O(n^4), with a space (there is a large amount of unrecognized saved time because we traverse words rather than characters)
  // However, a complexity of O(n^4) leads me to believe this is not the most optimal solution :(
  // sooo, let's try again

function gameDetector(grams, sentences) {
    // make our reverse hash for quick lookup
    var gameID = ngramToGameID(grams);

    //get our keys so we may sort them from largest ngram to smallest. This avoids nested ngram issue.
    var gameIDs = Object.keys(gameID);

    gameIDs = gameIDs.sort( (a, b) => {
      return b.length - a.length;
    });


    // combine all our sentences so we eliminate one loop
    // unique join argument so we can split later
    var result = sentences.join("%%%");
    var copy = result.slice(0);
    var changes = {};

    //go through our sorted ngrams and locate them within our string

    gameIDs.forEach( (gram) => {
      let gramPosition = copy.indexOf(gram);
      while(gramPosition > -1) {
        // let actualPosition = gramPosition + offset;
        // console.log(Array(12).join("1"));


        changes[gramPosition] = gram;
        // console.log(offset);
        // offset += (6 + gram.length + gameID[gram].length);
        let placeholder = Array(gram.length).join("$");
        // placeholder = "";
        // console.log(copy);
        // console.log(gram);
        // console.log(gramPosition);
        copy = copy.replace(gram, placeholder);
        gramPosition = copy.indexOf(gram);
      }

    });

    var positions = Object.keys(changes);

    positions = positions.sort( (a, b) => {
      return b - a;
    });


    // var offset = 0;
    positions.forEach( (position) => {
      let gram = changes[position];
      copy = insertWord(copy, position, gram, gameID[gram]);
      // offset += (6 + gram.length + gameID[gram].length);
    });

    copy = copy.replace(/\$/g, "");

    return copy.split("%%%");
  }

  //
  // function gameDetector(grams, sentences) {
  //     // make our reverse hash for quick lookup
  //     var gameID = ngramToGameID(grams);
  //
  //     //get our keys so we may sort them from largest ngram to smallest. This avoids rechecks
  //     var gameIDs = Object.keys(gameID);
  //
  //     gameIDs = gameIDs.sort( (a, b) => {
  //       return b.length - a.length;
  //     });
  //
  //
  //     // combine all our sentences so we eliminate one loop
  //     // unique join so we can split later
  //     var result = sentences.join("%%%");
  //     var copy = result.slice(0);
  //     var changes = {};
  //     var previous = null;
  //     // go through our sorted ngrams and locate them within our massive string
  //
  //     gameIDs.forEach( (gram) => {
  //       let gramPosition = copy.indexOf(gram);
  //       while(gramPosition > -1) {
  //         // let actualPosition = gramPosition + offset;
  //         // console.log(Array(12).join("1"));
  //         if (previous) {
  //           if (previous < gramPosition) {
  //             gramPosition -= previous;
  //           }
  //         }
  //
  //         changes[gramPosition] = gram;
  //         // console.log(offset);
  //         // offset += (6 + gram.length + gameID[gram].length);
  //         // let placeholder = Array(gram.length).join(" ");
  //         previous = gramPosition;
  //         // console.log(copy);
  //         // console.log(gram);
  //         // console.log(gramPosition);
  //         copy = copy.replace(gram, "");
  //         gramPosition = copy.indexOf(gram);
  //       }
  //
  //     });
  //
  //     var positions = Object.keys(changes);
  //
  //     positions = positions.sort( (a, b) => {
  //       return b - a;
  //     });
  //
  //
  //     // var offset = 0;
  //     positions.forEach( (position) => {
  //       let gram = changes[position];
  //       copy = insertWord(copy, position, gram, gameID[gram]);
  //       // offset += (6 + gram.length + gameID[gram].length);
  //     });
  //
  //
  //     return copy.split("%%%");
  //   }
  //

  function insertWord (sentence ,index, gram, gameID) {
    var combined = (sentence.slice(0, index) + taggify(gameID, gram) + sentence.slice(index));
    return combined;
  }

  //Time complexity discussion of enhanced solution
  //We loop through each gram and find the index of the gram which is an O(n^2) cost total
  //this is the bulk of our cost and everything else can be pretty much ignored.
  //However, this solution does not properly identify overlapping n-grams >.<
  //also note:javaScripts .replace method is very deceptive.
  //I learned that combining all the sentences leads to various different issues that must be handled
  //This was forsure fun and challenging though


  module.exports.gameDetector = gameDetector;
  module.exports.gameDetectorOriginal = gameDetectorOriginal;
