const pokeApi = {};

function convertPokeApiDetailsToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    console.log(pokeDetail)

    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.hp = pokeDetail.stats[0].base_stat;
    pokemon.attack = pokeDetail.stats[1].base_stat;
    pokemon.specialAttack = pokeDetail.stats[3].base_stat;
    pokemon.defense = pokeDetail.stats[2].base_stat;
    pokemon.speed = pokeDetail.stats[5].base_stat;

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailsToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const  url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)//fetch: devolve uma promise de response
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}

// pokeApi.getCurrentPokemon = (pokemonId) => {
//     const  url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

//     return fetch(url)//fetch: devolve uma promise de response
//         .then((response) => response.json())
//         .then((jsonBody) => jsonBody.results)
//         .then((pokemon) => console.log((pokeApi.getPokemonsDetail)))

// }
