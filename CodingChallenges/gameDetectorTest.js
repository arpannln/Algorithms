const gameDetector = require('./gameDetector.js').gameDetector;

// debugging log:
  // need to take care of punctuation
  // tried to check word by word instead of by character(to have less iterations)
  // but that was causing punctuation issues
  // added a function to remove punctuation
  // also checked for overlap issues THIS ONE WAS BIG!
  // must manipulate searching to go from larger ngrams to smaller ngrams to account for this

let grams, sentences, output;

  grams =
    {
    "CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
    "Fortnite": ["Fortnite", "Fort Nite"],
    "Destiny": ["Destiny", "original Destiny game"],
    "Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
    "WorldOfWarcraft": ["WoW the game", "world of warcraft"],
    };

  sentences =
    ["I liked the last Destiny game, now I play Fortnite",
     "Lol, no comment about that",
     "I'm still playing world of warcraft since ww2"];

  output = ["I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}",
    "Lol, no comment about that",
    "I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"];



  let i = 0;
  gameDetector(grams, sentences).forEach( (sentence) =>
    {
      if (sentence !== output[i]) {
        throw "Solution Failed Original Test Case";
      }
      i += 1;
    }
  );

  console.log("Solution Passed Original Test Case");

// solves aggressive punctuation issue
// this test case made me realize I was not handling the case where an n-gram
// could have multiple punctuation associated

  grams =
    {
    "CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
    "Fortnite": ["Fortnite", "Fort Nite"],
    "Destiny": ["Destiny", "original Destiny game"],
    "Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
    "WorldOfWarcraft": ["WoW the game", "world of warcraft"],
    };

  sentences =
    ["I liked the last Destiny game!!!!, now I play Fortnite",
     "Lol, no comment about that",
     "I'm still playing world of warcraft since ww2???"];

  output = ["I liked TAG{Destiny2,the last Destiny game}!!!!, now I play TAG{Fortnite,Fortnite}",
    "Lol, no comment about that",
    "I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2???"];



  i = 0;
  gameDetector(grams, sentences).forEach( (sentence) =>
    {
      if (sentence !== output[i]) {
        throw "Solution Failed Punctuation Test Case";
      }
      i += 1;
    }
  );

  console.log("Solution Passed Punctuation Test Case");

// maybe you did not want to handle case insensitive issue, but added it anyways
// I decided that I wanted the implementation to be case sensitive because LOL can refer to League Of Legends while lol
// should not trigger this
  grams =
    {
    "LeagueOfLegends": ["League of Legends", "League", "LOL"],
    "ClashRoyale": ["Clash Royale", "Clash"],
    };

  sentences =
    ["I used to play a lot of League of Legends, but then I learned javaScript instead!",
     "Lol, no comment about that",
     "I do occasionally play Clash because it's on my phone and a much shorter game"];

  output = ["I used to play a lot of TAG{LeagueOfLegends,League of Legends}, but then I learned javaScript instead!",
    "Lol, no comment about that",
    "I do occasionally play TAG{ClashRoyale,Clash} because it's on my phone and a much shorter game"];

  i = 0;
  gameDetector(grams, sentences).forEach( (sentence) =>
    {
      if (sentence !== output[i]) {
        throw "Solution Failed Case Sensitive Test Case";
      }
      i += 1;
    }
  );

  console.log("Solution Passed Case Sensitive Test Case");

// what if we have some overlapping of n-grams between different games? Something like this:
// My implementation is designed to trigger on the first word of the n-gram so it will handle
// this case just fine
// Clash is also replaced and not checked again so we don't have
// "I love playing original clash" => "I love playing TAG{ClashOfClans,original clash} TAG{ClashRoyale,clash}""
// I lowkey am starting to hate that I wrote this test case -.-

  grams =
    {
    "LeagueOfLegends": ["League of Legends", "League"],
    "ClashRoyale": ["Clash Royale", "Clash"],
    "ClashOfClans": ["Clash Of Clans", "original Clash"]
    };

  sentences =
    ["I used to play a lot of League of Legends, but then I learned javaScript instead!",
     "I love playing original Clash",
     "I love playing Clash",
     "I do occasionally play Clash because it's on my phone and a much shorter game"];

  output = ["I used to play a lot of TAG{LeagueOfLegends,League of Legends}, but then I learned javaScript instead!",
    "I love playing TAG{ClashOfClans,original Clash}",
    "I love playing TAG{ClashRoyale,Clash}",
    "I do occasionally play TAG{ClashRoyale,Clash} because it's on my phone and a much shorter game"];

    i = 0;
    gameDetector(grams, sentences).forEach( (sentence) =>
      {
        if (sentence !== output[i]) {
          throw "Solution Failed Overlap Test Case";
        }
        i += 1;
      }
    );

    console.log("Solution Passed Overlap Test Case");

// multiple instances of the same ngram?
  grams =
    {
    "LeagueOfLegends": ["League of Legends", "League"],
    "ClashRoyale": ["Clash Royale", "Clash"],
    "ClashOfClans": ["Clash Of Clans", "original Clash"],
    "Fifa18": ["Fifa","latest Fifa"]
    };

  sentences =
    ["I used to play a lot of League of Legends, but then I learned javaScript instead!",
     "I love playing original Clash",
     "I love playing Clash",
     "Clash is cool but Fifa is cooler!",
     "I do occasionally play Clash because it's on my phone and a much shorter game",
     "There is no way you beat me at the latest Fifa"];

  output = ["I used to play a lot of TAG{LeagueOfLegends,League of Legends}, but then I learned javaScript instead!",
    "I love playing TAG{ClashOfClans,original Clash}",
    "I love playing TAG{ClashRoyale,Clash}",
    "TAG{ClashRoyale,Clash} is cool but TAG{Fifa18,Fifa} is cooler!",
    "I do occasionally play TAG{ClashRoyale,Clash} because it's on my phone and a much shorter game",
    "There is no way you beat me at the TAG{Fifa18,latest Fifa}"
  ];

    i = 0;
    gameDetector(grams, sentences).forEach( (sentence) =>
      {
        if (sentence !== output[i]) {
          throw "Solution Failed Repeated Ngram Test Case";
        }
        i += 1;
      }
    );

    console.log("Solution Passed Repeated Ngram Test Case");
