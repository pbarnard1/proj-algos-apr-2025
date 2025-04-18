let pokemonObj = {
    "abilities": [
        {
            "ability": {
                "name": "water-absorb",
                "url": "https://pokeapi.co/api/v2/ability/11/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "shell-armor",
                "url": "https://pokeapi.co/api/v2/ability/75/"
            },
            "is_hidden": false,
            "slot": 2
        },
        {
            "ability": {
                "name": "hydration",
                "url": "https://pokeapi.co/api/v2/ability/93/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
        "base_experience": 187,
            "cries": {
        "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg",
            "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/131.ogg"
    },
    "forms": [
        {
            "name": "lapras",
            "url": "https://pokeapi.co/api/v2/pokemon-form/131/"
        }
    ],
    "game_indices": [
        {
            "game_index": 19,
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        },
        {
            "game_index": 19,
            "version": {
                "name": "blue",
                "url": "https://pokeapi.co/api/v2/version/2/"
            }
        },
        {
            "game_index": 19,
            "version": {
                "name": "yellow",
                "url": "https://pokeapi.co/api/v2/version/3/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "gold",
                "url": "https://pokeapi.co/api/v2/version/4/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "silver",
                "url": "https://pokeapi.co/api/v2/version/5/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "crystal",
                "url": "https://pokeapi.co/api/v2/version/6/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "ruby",
                "url": "https://pokeapi.co/api/v2/version/7/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "sapphire",
                "url": "https://pokeapi.co/api/v2/version/8/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "emerald",
                "url": "https://pokeapi.co/api/v2/version/9/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "firered",
                "url": "https://pokeapi.co/api/v2/version/10/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "leafgreen",
                "url": "https://pokeapi.co/api/v2/version/11/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "diamond",
                "url": "https://pokeapi.co/api/v2/version/12/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "pearl",
                "url": "https://pokeapi.co/api/v2/version/13/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "platinum",
                "url": "https://pokeapi.co/api/v2/version/14/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "heartgold",
                "url": "https://pokeapi.co/api/v2/version/15/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "soulsilver",
                "url": "https://pokeapi.co/api/v2/version/16/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "black",
                "url": "https://pokeapi.co/api/v2/version/17/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "white",
                "url": "https://pokeapi.co/api/v2/version/18/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "black-2",
                "url": "https://pokeapi.co/api/v2/version/21/"
            }
        },
        {
            "game_index": 131,
            "version": {
                "name": "white-2",
                "url": "https://pokeapi.co/api/v2/version/22/"
            }
        }
    ],
    "height": 25
}

// Loop through each key
for (let currentKey in pokemonObj) {
    console.log(currentKey);
    console.log(pokemonObj[currentKey]);
}

// Grabbing all the names from "game_indices"
let allNames = [];
for (let currentGame of pokemonObj["game_indices"]) { // Looping through the array linked to the "game_indices" key, hence a for-of loop
    console.log(currentGame); // Object
    console.log(currentGame["version"]); // Object within the currentGame variable - specifically the key "version"
    console.log(currentGame["version"]["name"]); // "name" key within the object linked to the version "key"
    allNames.push(currentGame["version"]["name"]);
}

console.log(allNames);