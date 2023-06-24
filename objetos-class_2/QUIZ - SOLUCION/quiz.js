class Pregunta {
    constructor(pregunta,opciona,opcionb,opcionc,opciond,correct){
        this.pregta = pregunta;
        this.opcA = opciona;
        this.opcB = opcionb;
        this.opcC = opcionc;
        this.opcD = opciond;
        this.correcta = correct;
    }
}


class GestorPreguntas{
    constructor(){
        this.lista = [];
    }
    //metodo agregar
    agregarpregunta(pregunta){
        this.lista.push(pregunta);
    }

    //metodo eliminar
    eliminarpregunta(index){
        this.lista.splice(index, 1);
        listar();
    }
}

// crear la instancia para cada pregunta
const preguntanueva = new GestorPreguntas();

// llamo los inputs del formulario
const formulario = document.getElementById('formulario');
const preguntainput = document.getElementById('preguntaH');
const opcionAinput = document.getElementById('opcionA');
const opcionBinput = document.getElementById('opcionB');
const opcionCinput = document.getElementById('opcionC');
const opcionDinput = document.getElementById('opcionD');
const correctainput = document.getElementById('opccorrecta')


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const pregta = preguntainput.value;
    const opcA = opcionAinput.value;
    const opcB = opcionBinput.value;
    const opcC = opcionCinput.value;
    const opcD = opcionDinput.value;
    const correcta = correctainput.value;

    const nuevapegunta = new Pregunta(pregta,opcA,opcB,opcC,opcD);
    preguntanueva.agregarpregunta(nuevapegunta);
    listar();

    formulario.reset();
});


const padrepreguntas = document.getElementById('padrepreguntas');

function listar(){
    padrepreguntas.innerHTML = "";

    preguntanueva.lista.forEach((pregunta, index) => {
        const hijopreguntas = document.createElement('div');
        hijopreguntas.className = 'card';
        hijopreguntas.style.width = '20rem';

        hijopreguntas.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${pregunta.pregta}
        </h5>
        <div class="card-text">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
            ${pregunta.opcA}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
            ${pregunta.opcB}
            </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
            ${pregunta.opcC}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">
        ${pregunta.opcD}
        </label>
        </div>
        </div>
        <button onclick="eliminarpreguntas"(${index})">
        eliminar
        </button>
        </div>
        </div>`

        padrepreguntas.appendChild(hijopreguntas);
        
    });
}


function eliminarpreguntas(index){
    preguntanueva.eliminarpregunta(index)
    listar();
}