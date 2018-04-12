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
// Gameplan pivot:
//    search through entire string for each ngram, swap this ngram with a unique code so we dont find it again
//    go through our unique codes and replace them with the associated ngram
// Approach:

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
    // placeholder hash to record unqiue keys for our grams
    var result = sentences.join("$$$");
    var copy = result.slice(0);
    var placeholders = {};

    //go through our sorted ngrams and replace all instances of our ngram with a unique value
    gameIDs.forEach( (gram) => {
      let placeholder = hasher();
      placeholders[placeholder] = gram;

      copy = copy.replace(new RegExp(gram, "g"), placeholder);
    });

    //insert taggified ngram into our sentence wherever we find associated placeholder
    for (placeholder in placeholders) {
      var gram = placeholders[placeholder];
      copy = copy.replace(new RegExp(placeholder, "g"), taggify(gameID[gram], gram));
    };

    //delete those $ bills yo
    return copy.split("$$$");
  }

// helper methods

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

  //function to instert taggified ngram in the correct location
  function insertWord (sentence ,index, gram, gameID) {
    var combined = (sentence.slice(0, index) + taggify(gameID, gram) + sentence.slice(index));
    return combined;
  }

  const WEIRDOS = 'abcdefghijklmaopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV123456789'.split("");

  //not really a hashing function but generating a unique key for each phrase
  //should be relatively unique, can make this even more unique by making it longer
  //but 8 seems good enough for now
  function hasher() {
    var hashed = "";
    for (let i = 0; i < 8; i++) {
      hashed += WEIRDOS[Math.floor(Math.random()*WEIRDOS.length)];
    }
    return hashed;
  }

  //After many modifications I have managed to split tasks effeciently to a point where
  //my most expensive operation is at worst case O(n^2). There are multiple operations of this
  //time complexity but since they are not nested, but rather seperate, the constant can be dropped.
  //feels bad man 
  module.exports.gameDetector = gameDetector;
