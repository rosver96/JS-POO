 
async function pokem(){
try {

const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

const data = await response .json();
return data; 

} catch (error) {
    throw 'eror al obtener datos'
}

}

async function pokem2(){
    try {
        const data = await pokem();
        const main = document.getElementById('main');
        console.log(data)
        const datopokemon =`
        <main class="main">

        </main>
        `
        main .innerHTML = datopokemon
    }catch(error) {
        console.log(error);
    }
}

pokem2();