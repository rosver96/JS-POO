class Rectangulo {
    constructor (ancho,altura){
    this.ancho = ancho;
    this.altura = altura;
    }

    calcularArea(){
        return this.ancho * this.altura;
    }
}
const rectangulo1 = new Rectangulo(5,3);
console.log(rectangulo1.calcularArea());
