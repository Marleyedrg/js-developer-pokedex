function moreDetails(){
    let moreDetailsBox = document.getElementById("moreDetails");

    pokemonBox = document.querySelectorAll(".pokemon");

    pokemonBoxArr = Array.from(pokemonBox);

    for (let i = 0; i < pokemonBoxArr.length; i++) {
        let current = document.getElementById(pokemonBoxArr[i].id);
        current.addEventListener('click', () =>{
            moreDetailsBox.innerText = `${current.classList}`
            if(moreDetailsBox.classList[0] != "hidden"){
                moreDetails();
            }else{
                moreDetailsBox.classList.remove("hidden");
            }
            


        });
    };
};