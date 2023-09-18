function moreDetails(){
    const moreDetailsBox = document.getElementById("moreDetails");
    const moreDetailsContent = document.getElementById("moreDetails-content")


    pokemonBox = document.querySelectorAll(".pokemon");

    pokemonBoxArr = Array.from(pokemonBox);

    for (let i = 0; i < pokemonBoxArr.length; i++) {
        let current = document.getElementById(pokemonBoxArr[i].id);
        current.addEventListener('click', () =>{
            moreDetailsContent.innerText = `${current.id}`
            
            if(moreDetailsBox.classList[0] != "hidden"){
                moreDetails();
            }else{
                moreDetailsBox.classList.toggle("hidden")
            }
        

        });
    };
};