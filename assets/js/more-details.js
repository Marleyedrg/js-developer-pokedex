function moreDetails(){
    const moreDetailsBox = document.getElementById("moreDetails");
    const moreDetailsContent = document.getElementById("moreDetails-content");
    const pokemonNameTitle = document.getElementById("pokemon-name");
    const closeBtn = document.getElementById("close-btn");
    
    pokemonBox = document.querySelectorAll(".pokemon");

    pokemonBoxArr = Array.from(pokemonBox);

    for (let i = 0; i < pokemonBoxArr.length; i++) {
        let current = document.getElementById(pokemonBoxArr[i].id);
        current.addEventListener('click', () =>{
            if(moreDetailsBox.classList[0] != "hidden"){
                return;
            }
            moreDetailsBox.classList.toggle("hidden");

            pokemonNameTitle.innerText = pokemonsDetails[current.id].name;

            moreDetailsContent.classList = `${pokemonsDetails[current.id].type}`;

            moreDetailsContent.innerHTML = `
            <img src="${pokemonsDetails[current.id].photo}" class="more-details-photo" alt="${pokemonsDetails[current.id].name}">
            <div id ="pokemonsDetails">
                <div class="items">
                    HP:
                        <span id="hp" style="width:${pokemonsDetails[current.id].hp}%;">
                            ${pokemonsDetails[current.id].hp}
                        </span>
                </div>
                <div class="items">
                     ATTACK:
                     <span id="attack" style="width:${pokemonsDetails[current.id].attack}%;">
                        ${pokemonsDetails[current.id].attack} 
                    </span>
                </div>
                <div class="items">
                    SPECIAL ATTACK:
                        <span id="specialAttack" style="width:${pokemonsDetails[current.id].specialAttack}%;">
                            ${pokemonsDetails[current.id].specialAttack}
                        </span>
                </div>
                <div class="items" >
                    DEFENSE:
                        <span id="defense" style="width:${pokemonsDetails[current.id].defense}%;">
                            ${pokemonsDetails[current.id].defense}
                        </span>
                </div>
                <div class="items" >SPEED:${pokemonsDetails[current.id].speed}</div>    
                <div class="items" >HEIGHT:${pokemonsDetails[current.id].height}</div>
                <div class="items" >WEIGHT:${pokemonsDetails[current.id].weight}</div>
            </div>`
        });
        
    };

    //close more details window
    closeBtn.addEventListener('click', ()  =>{
        moreDetailsBox.classList.add("hidden");
    });
};