
let url = 'https://pokeapi.co/api/v2/pokemon/'

const pokemon = async(url,i) => {
    const response = await fetch(url + i);   // fetch con esto entro a la api//
    const data = await response.json();       // accedo al json y traigo la info en formato json
    functionMostarPokemon(data)
}

const llamarPokemon = async() => {
    for (let i = 1; i<100; i++){
        await pokemon(url, i); 
    }
}
llamarPokemon();



const contenedorHtml = document.querySelector('#contenedor');

function functionMostarPokemon(pokemones){
    const crearDiv = document.createElement('div');
    crearDiv.classList.add('clasePokemon');
    crearDiv.innerHTML = ` 
    <div class="card" style="width: 16rem;">
        <img src="${pokemones.sprites.other ["official-artwork"].front_default}" class="card-img-top" alt="">
        <p> Tipo: ${pokemones.types["0"].type.name}</p>
        <p> Name : ${pokemones.name}</p>
        <p> Altura: ${pokemones.height}</p>
        <p> Peso: ${pokemones.weight}</p>
    `
    contenedorHtml.append(crearDiv);
}

 











// async function pokem(){
// try {

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

// const data = await response .json();
// return data; 

// } catch (error) {
//     throw 'eror al obtener datos'
// }

// }

// async function pokem2(){
//     try {
//         const data = await pokem();
//         const main = document.getElementById('main');
//         console.log(data)
//         const datopokemon =`
//         <main class="main">

//         </main>
//         `
//         main .innerHTML = datopokemon
//     }catch(error) {
//         console.log(error);
//     }
// }

// pokem2();