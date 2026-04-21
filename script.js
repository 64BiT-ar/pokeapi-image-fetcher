// Fetch from APi


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(Response => {
        
//         // console.log(Response);
//         // return Response.json();

//         if(!Response.ok){
//             throw new Error("Pokemon not found.");
//         }

//         return Response.json();

//     })
//     .then(data => {
        
//         console.log(data);

//     })
//     .catch(error => console.log(error));

// Method - 2

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!Response.ok){
            throw new Error("Not founsd.");
        }

        const data = await Response.json();
        let pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonImg");

        imgElement.src = pokemonSprite;


    }
    catch(error){
        console.error(error);
    }

}