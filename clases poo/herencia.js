class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola mi nombres es ${this.nombre}`);
    }
}

class Perro extends Animal {
    ladrar (){
        console.log("Guau - Guau")
    }
}

const miPerro = new Perro ("Firulais");
miPerro.saludar();
miPerro.ladrar();