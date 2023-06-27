class Calculadora {
  sumar(num1, num2) {
    return num1 + num2;
  }

  restar(num1, num2) {
    return num1 - num2;
  }

  dividir(num1, num2) {
    return num1 / num2;
  }

  multiplicar(num1, num2) {
    return num1 * num2;
  }
}

class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculadora = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "/",
      multiplicar: "*",
      restar: "-"
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTODO() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
    if (this.tipoOperacion !== "igual") {
      this.calcular();
    }

    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + numero;
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;

    this.valorActual = this.calculadora[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesDeOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonesDeOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});


document.addEventListener("keydown", (event) => {
  const tecla = event.key;

  if (tecla === "Enter" || tecla === "Intro") {
    display.computar("igual");
  } else {
    switch (tecla) {
      case "Backspace":
        display.borrar();
        break;
      case "Delete":
        display.borrarTODO();
        break;
      case "+":
        display.computar("sumar");
        break;
      case "-":
        display.computar("restar");
        break;
      case "*":
        display.computar("multiplicar");
        break;
      case "/":
        display.computar("dividir");
        break;
      case ",":
        display.agregarNumero(".");
        break;
      default:
        if (!isNaN(tecla)) {
          display.agregarNumero(tecla);
        }
        break;
    }
  }
});
