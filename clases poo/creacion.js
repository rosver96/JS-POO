// class Rectangulo {
//     constructor (ancho,altura){
//     this.ancho = ancho;
//     this.altura = altura;
//     }

//     calcularArea(){
//         return this.ancho * this.altura;
//     }
// }
// const rectangulo1 = new Rectangulo(5,3);
// console.log(rectangulo1.calcularArea());





class Triangulo {
    constructor (base,lado1){
        this.base = base;
        this.lado1 = lado1;
      
    }
    calcular(){
        return this.base** this.lado1;
    }
}

const resultado = new Triangulo(2,3);
console.log(resultado.calcular());