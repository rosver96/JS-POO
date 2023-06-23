class Persona {
    constructor(nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
    }

    get nombre() {
      return this._nombre;
    }

    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }

    get edad() {
      return this._edad;
    }

    set edad(nuevaEdad) {
      if (nuevaEdad >= 0) {
        this._edad = nuevaEdad;
      } else {
        console.log("La edad debe ser un valor positivo.");
      }
    }
  }

  const persona1 = new Persona("Juan", 25);
  console.log(persona1.nombre); // Output: "Juan"
  console.log(persona1.edad); // Output: 25

  persona1.nombre = "Carlos";
  console.log(persona1.nombre); // Output: "Carlos"

  persona1.edad = -10; // Intento establecer una edad negativa
  console.log(persona1.edad); // Output: 25 (la edad no cambió)

  persona1.edad = 30;
  console.log(persona1.edad); // Output: 30