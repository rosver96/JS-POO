class Pregunta {
    constructor(pregunta, opciona, opcionb, opcionc, opciond, correcta) {
      this.pregunta = pregunta;
      this.opcA = opciona;
      this.opcB = opcionb;
      this.opcC = opcionc;
      this.opcD = opciond;
      this.correcta = correcta;
    }
  }
  
  class GestorPreguntas {
    constructor() {
      this.lista = [];
    }
  
    agregarPregunta(pregunta) {
      this.lista.push(pregunta);
    }
  
    eliminarPregunta(index) {
      this.lista.splice(index, 1);
    }
  
    actualizarPregunta(index, pregunta, opciona, opcionb, opcionc, opciond, correcta) {
      this.lista[index].pregunta = pregunta;
      this.lista[index].opcA = opciona;
      this.lista[index].opcB = opcionb;
      this.lista[index].opcC = opcionc;
      this.lista[index].opcD = opciond;
      this.lista[index].correcta = correcta;
    }
  }
  
  const gestorPreguntas = new GestorPreguntas();
  const formulario = document.getElementById('formulario');
  const preguntaInput = document.getElementById('preguntaH');
  const opcionAInput = document.getElementById('opcionA');
  const opcionBInput = document.getElementById('opcionB');
  const opcionCInput = document.getElementById('opcionC');
  const opcionDInput = document.getElementById('opcionD');
  const correctaInput = document.getElementById('opccorrecta');
  const padrepreguntas = document.getElementById('padrepreguntas');
  
  let indiceEditando = -1;
  
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const pregunta = preguntaInput.value;
    const opcA = opcionAInput.value;
    const opcB = opcionBInput.value;
    const opcC = opcionCInput.value;
    const opcD = opcionDInput.value;
    const correcta = correctaInput.value;
  
    const nuevaPregunta = new Pregunta(pregunta, opcA, opcB, opcC, opcD, correcta);
  
    if (indiceEditando === -1) {
      gestorPreguntas.agregarPregunta(nuevaPregunta);
    } else {
      gestorPreguntas.actualizarPregunta(
        indiceEditando,
        nuevaPregunta.pregunta,
        nuevaPregunta.opcA,
        nuevaPregunta.opcB,
        nuevaPregunta.opcC,
        nuevaPregunta.opcD,
        nuevaPregunta.correcta
      );
      indiceEditando = -1;
    }
  
    listar();
  
    formulario.reset();
  });
  
  function listar() {
    padrepreguntas.innerHTML = "";
  
    gestorPreguntas.lista.forEach((pregunta, index) => {
      const hijopreguntas = document.createElement('div');
      hijopreguntas.className = 'card';
      hijopreguntas.style.width = '20rem';
  
      hijopreguntas.innerHTML = `
        <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">${pregunta.pregunta}</h5>
            <div class="card-text" style="color:white">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">${pregunta.opcA}</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">${pregunta.opcB}</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                <label class="form-check-label" for="flexRadioDefault3">${pregunta.opcC}</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                <label class="form-check-label" for="flexRadioDefault4">${pregunta.opcD}</label>
              </div>
            </div>
            <button onclick="eliminarPregunta(${index})" class="btn btn-danger">Eliminar</button>
            <button onclick="editarPregunta(${index})" class="btn btn-success">Editar</button>
          </div>
        </div>`;
  
      padrepreguntas.appendChild(hijopreguntas);
    });
  }
  
  function eliminarPregunta(index) {
    gestorPreguntas.eliminarPregunta(index);
    listar();
  }
  
  function editarPregunta(index) {
    const pregunta = gestorPreguntas.lista[index];
    preguntaInput.value = pregunta.pregunta;
    opcionAInput.value = pregunta.opcA;
    opcionBInput.value = pregunta.opcB;
    opcionCInput.value = pregunta.opcC;
    opcionDInput.value = pregunta.opcD;
    correctaInput.value = pregunta.correcta;
  
    indiceEditando = index;
  
    formulario.onsubmit = (event) => {
      event.preventDefault();
  
      const nuevaPregunta = new Pregunta(
        preguntaInput.value,
        opcionAInput.value,
        opcionBInput.value,
        opcionCInput.value,
        opcionDInput.value,
        correctaInput.value
      );
  
      gestorPreguntas.actualizarPregunta(
        indiceEditando,
        nuevaPregunta.pregunta,
        nuevaPregunta.opcA,
        nuevaPregunta.opcB,
        nuevaPregunta.opcC,
        nuevaPregunta.opcD,
        nuevaPregunta.correcta
      );
      listar();
  
      formulario.reset();
      formulario.onsubmit = null;
      indiceEditando = -1;
    };
  }
  
  listar();
  