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
// trigger n-gram.

// Initial-solution-plan:
//    Create a reverse hash from the n-grams which would point to gameId
//      e.g. {"Call of Duty world war two": "CallOfDutyWW2", }
//    Iterate through sentences, locating any possible n-gram (this sounds quite expensive)
//
// Super naive approach:

  function gameDetector (grams, sentences) {
    //create our reverse hash
    var reverse = {};
    for (let key in grams) {
      grams[key].forEach( (gram) => reverse[gram] = key)
    }

    sentences.forEach ( (sentence) =>
      {
        sentenc
      }

    )

  }

  function taggify (gameID, ngram) {
    return `TAG{${gameID},${ngram}}`;
  }
