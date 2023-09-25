const pokemons = [
    {
        "id": 1,
        "name": "bulbasaur",
        "height": 7,
        "weight": 69,
        "abilities": [
            {
                "ability": {
                    "name": "overgrow",
                },
                "is_hidden": false,
            },
            {
                "ability": {
                    "name": "chlorophyll",
                },
                "is_hidden": true,
            }
        ],
        "types": [
            {
                "type": {
                    "name": "grass",
                }
            },
            {
                "type": {
                    "name": "poison",
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "charmander",
        "height": 6,
        "weight": 85,
        "abilities": [
            {
                "ability": {
                    "name": "blaze"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "solar-power"
                },
                "is_hidden": true
            }
        ],
        "types": [
            {
                "type": {
                    "name": "fire"
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "squirtle",
        "height": 5,
        "weight": 90,
        "abilities": [
            {
                "ability": {
                    "name": "torrent"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "rain-dish"
                },
                "is_hidden": true
            }
        ],
        "types": [
            {
                "type": {
                    "name": "water"
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "ivysaur",
        "height": 10,
        "weight": 130,
        "abilities": [
            {
                "ability": {
                    "name": "overgrow"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "chlorophyll"
                },
                "is_hidden": true
            }
        ],
        "types": [
            {
                "type": {
                    "name": "grass"
                }
            },
            {
                "type": {
                    "name": "poison"
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "charizard",
        "height": 17,
        "weight": 905,
        "abilities": [
            {
                "ability": {
                    "name": "blaze"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "solar-power"
                },
                "is_hidden": true
            }
        ],
        "types": [
            {
                "type": {
                    "name": "fire"
                }
            },
            {
                "type": {
                    "name": "flying"
                }
            }
        ]
    },
    {
        "id": 6,
        "name": "pidgey",
        "height": 3,
        "weight": 18,
        "abilities": [
            {
                "ability": {
                    "name": "keen-eye"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "tangled-feet"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "big-pecks"
                },
                "is_hidden": true
            }
        ],
        "types": [
            {
                "type": {
                    "name": "normal"
                }
            },
            {
                "type": {
                    "name": "flying"
                }
            }
        ]
    },
    {
        "id": 7,
        "name": "dragonite",
        "height": 22,
        "weight": 2100,
        "abilities": [
            {
                "ability": {
                    "name": "inner-focus"
                },
                "is_hidden": false
            },
            {
                "ability": {
                    "name": "multiscale"
                },
                "is_hidden": true
            }
        ],
        "types": [
            {
                "type": {
                    "name": "dragon"
                }
            },
            {
                "type": {
                    "name": "flying"
                }
            }
        ]
    }
]

// a. Utilizando map, imprima o novo array fazendo com que todos os nomes dos pokemons estejam TODOS em letras maiúculas;
// b. Utilizando map, imprima o novo array fazendo com que todos os campos id_hidden do array de abilities sejam true;
// c. Utilizando map, imprima o novo array fazendo com que SE o PESO do pokemon seja maior que 100, o valor de weight seja "HEAVY";   

// FILTER
// Considerando o array de pokemons acima:
// a. Utilizando filter, retorne APENAS os pokemons do tipo flying;
const procura_pokemon = pokemons.filter(poke => 
    poke.types.some(tipo => 
        //tipo.type.name === "flying"
        tipo.type.name.includes("flying")
        )
        );

// console.log(procura_pokemon);

// b. Utilizando filter, retorne APENAS os pokemons com peso menor que 90;

const peso_pokemon = pokemons.filter(poke => 
    poke.weight < 90);

// console.log(peso_pokemon);
// c. Utilizando filter, retorne APENAS os pokemons do tipo fire;

const fire_pokemon = pokemons.filter(firepoke => 
    firepoke.types.some(tipo => 
        //tipo.type.name === "flying"
        tipo.type.name.includes("fire")
        )
        );

// console.log(fire_pokemon);
// d. Utilizando filter, retorne APENAS os pokemons do tipo grass E poison;
const gp_pokemon = pokemons.filter(gppoke => 
        gppoke.types.some(tipo => 
        //tipo.type.name === "flying"
        tipo.type.name.includes("grass" && "poison")
        )
        );

//console.log(gp_pokemon);

const names = pokemons.map(pokemon => {
    pokemon.name = pokemon.name.toUpperCase();
    return pokemon
});

//const names_poke = pokemons.map(pokemon => pokemon.name = pokemon.name.toUpperCase());

//console.log(names);
//console.log(names_poke);


// const ishidden = pokemons.map(pokemon => {
//     pokemon.abilities.map(hid => {
    
//        hid.is_hidden = true

//     }) 

//     return pokemon;

// });

const ishidden = pokemons.map(pokemon => 
    pokemon.abilities.map(hid => 
    hid.is_hidden = true ))


console.log(ishidden);


