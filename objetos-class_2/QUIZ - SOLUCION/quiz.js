class Pregunta {
    constructor(pregunta,opcionA,opcionB,opcionC,opcionD) {
        this.Pregunta = pregunta;
        this.opcionA = opcionA;
        this.opcionB = opcionB;
        this.opcionB = opcionC;
        this.opcionB = opcionD;

    }   

}

class Manager {
    constructor() {
        this.lista = [];
    }
}

const pregunta = document.getElementById("pregunta").value;
const opciona = document.getElementById("opciona").value; 
const opcionb = document.getElementById("opcionb").value;  
const opcionc = document.getElementById("opcionc").value; 
const opciond = document.getElementById("opciond").value;   
const lista = document.getElementById("lista").value;

formulario.addEventlistener("submit", (e) => {
    e.preventDefault();
    
    const pregunta1 = new Pregunta;
    const opciona1 =  opciona;
    const opcionb2 =  opcionb;
    const opcionc3 =  opcionc;
    const opciond4 =  opciond;
})

function question() {
    lista.innerHTML = "";
    const lista = manager
}
