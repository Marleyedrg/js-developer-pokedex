const pokemonList = document.getElementById("pokemonList");
const loadMoreBtn = document.getElementById("load-more-btn");

const maxRecord = 151; 

const limit = 10;
let offset = 0;

function loadPokemonItems(offset, limit ){

    function convertPokemonToLi(pokemon){
        // console.log(pokemon.types)
        return `<li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((types) => `<li class="type ${types}">${types}</li>`).join('')}
                        </ol>
    
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>`
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml; 
    
        // const listItems = [];
    
        // for (let  i = 0;  i < pokemons.length;  i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToLi(pokemon))
        // }
    
    })
    
}

loadPokemonItems(offset, limit);

loadMoreBtn.addEventListener('click', () => {
    offset+=limit;

    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecord){
        const newLimite = maxRecord - offset;
        loadPokemonItems(offset, newLimite);

        loadMoreBtn.parentElement.removeChild(loadMoreBtn);
    }else{
        loadPokemonItems(offset, limit);
    }
});

