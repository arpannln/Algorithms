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
{
"CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
"Fortnite": ["Fortnite", "Fort Nite"],
"Destiny": ["Destiny", "original Destiny game"],
"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
"WorldOfWarcraft": ["WoW the game", "world of warcraft"],
}
