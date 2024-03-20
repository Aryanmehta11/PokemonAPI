
async function fetchData(){
    
     try {
        const pokemonName=document.getElementById('pokemonName').value.toLowerCase(); 
      
        let response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
       if(!response.ok){
        throw new Error("Could not fetch the resource")
       }
       const data=await response.json();
    //    console.log(data)
    //    console.log("the sprite data:" + data.sprites.front_default)
      
       const pokemonSprite=data.sprites.front_default;
       const imgElement=document.getElementById('pokemonSprite');
       imgElement.src=pokemonSprite;
       imgElement.style.display='block';
       
       
    }

    catch(error){
        console.error(error);
    }
}

