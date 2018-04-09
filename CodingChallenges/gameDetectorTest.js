const gameDetector = require('./gameDetector.js').gameDetector;

// debugging log:
  // need to take care of punctuation
  // tried to check word by word instead of by character(to have less iterations)
  // but that was causing punctuation issues
  // added a function to remove punctuation
  // realized that my solution was not case insensitive - made function case insensitive
  // also checked for overlap issues

let grams, sentences, output;

//solves original problem
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
      "I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"]



    let i = 0;
    gameDetector(grams, sentences).forEach( (sentence) =>
      {
        if (sentence !== output[i]) {
          throw "Failed Original Test Case";
        }
        i += 1;
      }
    );

    console.log("Passed Original Test Case");

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
          throw "Failed Punctuation Test Case";
        }
        i += 1;
      }
    );

    console.log("Passed Punctuation Test Case");

// maybe you did not want to handle case insensitive issue, but added it anyways
    grams =
      {
      "LeagueOfLegends": ["League Of Legends", "League"],
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
            throw "Failed Case Insensitive Test Case";
          }
          i += 1;
        }
      );

      console.log("Passed Case Insensitive Test Case");

// what if we have some overlapping of n-grams between different games? Something like this:
// My implementation is designed to trigger on the first word of the n-gram so it will handle
// this case just fine
// Clash is also replaced and not checked again so we don't have
// "I love playing original clash" => "I love playing TAG{ClashOfClans,original clash} TAG{ClashRoyale,clash}""

      grams =
        {
        "LeagueOfLegends": ["League Of Legends", "League"],
        "ClashRoyale": ["Clash Royale", "Clash"],
        "ClashOfClans": ["Clash Of Clans", "Original Clash"]
        };

      sentences =
        ["I used to play a lot of League of Legends, but then I learned javaScript instead!",
         "I love playing original clash",
         "I love playing clash",
         "I do occasionally play Clash because it's on my phone and a much shorter game"];

      output = ["I used to play a lot of TAG{LeagueOfLegends,League of Legends}, but then I learned javaScript instead!",
        "I love playing TAG{ClashOfClans,original clash}",
        "I love playing TAG{ClashRoyale,clash}",
        "I do occasionally play TAG{ClashRoyale,Clash} because it's on my phone and a much shorter game"];

        i = 0;
        gameDetector(grams, sentences).forEach( (sentence) =>
          {
            if (sentence !== output[i]) {
              throw "Failed Overlap Test Case";
            }
            i += 1;
          }
        );

        console.log("Passed Overlap Test Case");
