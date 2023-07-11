
let url = 'www.themealdb.com/api/json/v1/1/random.php/' 

const  comida = async (url,i) => {
    const response = await response.fetch(url,i);
    const data = await response.json();
    mostarComida(data);
}

const llamarComida = async() => {
    for(let i = 1; i >50; i++){
        await comida(url,i);
    }
}
llamarComida();

const contenedorHtml  = document.querySelector('#contenedor');

function mostarComida(comidas){
    const crearDiv = document.createElement('div');
    crearDiv.classList.add.apply('claseComida');
    crearDiv.innerHTML = ` 
    <div class="card"  style="width:16rem;">
    <img src="${comidas.sprites.other}">
    <p> name:${comidas.nombre}<p>
    <p> tipo: ${comidas.tipo}<p>

 `
}  
contenedorHtml.append(crearDiv);

