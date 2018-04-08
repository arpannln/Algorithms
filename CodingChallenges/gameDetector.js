//two inputs
//first input - large hash mapping strings to list of possible n-grams used to refer to the game
//eg
        // {
        // "CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
        // "Fortnite": ["Fortnite", "Fort Nite"],
        // "Destiny": ["Destiny", "original Destiny game"],
        // "Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
        // "WorldOfWarcraft": ["WoW the game", "world of warcraft"],
        // }
//second input - large array of sentences
//eg
        //   ["I liked the last Destiny game, now I play Fortnite",
        // "Lol, no comment about that",
        // ...,
        // "I'm still playing world of warcraft since ww2"]
//output -
        // ["I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}",
        // "Lol, no comment about that",
        // ...,
        // "I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"]


// “CallOfDutyWW2”, must be represented in the final text as TAG{GameID,original
// text}, e.g. TAG{CallOfDutyWW2,Call of Duty world war two}.
