import { temperatura } from "./temperatura.js";
import { distancia } from "./distancia.js";
import { peso } from "./peso.js";


const  formulario = document.getElementById("formulario");
const select = document.getElementById("select");
const input = document.getElementById("input");
const resultado = document.getElementById("resultado");


formulario.addEventListener("submit", function(event){
    event.preventDefault ();

    let conversion = select.value

    if(conversion === "1"){
        resultado.innerHTML= "";
        let resultadoTemperatura = temperatura(input.value)
        let mostrarResultado = document.createElement('p')
        mostrarResultado.textContent = `la temperatura en farenheit es   :${resultadoTemperatura}`
        resultado.appendChild(mostrarResultado);
    } else if (conversion  ===  "2"){
        resultado.innerHTML= "";
        let resultadoDistancia = distancia(input.value)
        let mostrarResultado2 = document.createElement('p')
        mostrarResultado2.textContent = `la distancia en pies es   :${resultadoDistancia}`
        resultado.appendChild(mostrarResultado2);
    }else if (conversion === "3"){ 
        resultado.innerHTML= "";
        let resultadoPeso = peso(input.value)
        let mostarResultado3 = document.createElement('p')
        mostarResultado3.textContent = `los kilogramos en peso son   :${resultadoPeso}`
        resultado.appendChild(mostarResultado3);

    }
});




