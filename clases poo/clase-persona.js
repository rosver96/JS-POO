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










  // class CartItem {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// let cart = [];

// function addToCart(name, price) {
//   const item = new CartItem(name, price);
//   cart.push(item);
//   saveCart();
//   showCart();
// }

// function removeFromCart(index) {
//   cart.splice(index, 1);
//   saveCart();
//   showCart();
// }

// function clearCart() {
//   cart = [];
//   saveCart();
//   showCart();
// }

// function calculateTotal() {
//   let total = 0;
//   for (const item of cart) {
//     total += item.price;
//   }
//   return total;
// }

// function generateInvoice() {
//   let invoice = '<h5>Resumen de Compra:</h5><ul>';
//   for (const item of cart) {
//     invoice += `<li>${item.name} - $${item.price}</li>`;
//   }
//   invoice += `</ul><p>Total: $${calculateTotal()}</p>`;
//   return invoice;
// }

// function saveCart() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// function loadCart() {
//   const savedCart = localStorage.getItem('cart');
//   if (savedCart) {
//     cart = JSON.parse(savedCart);
//   }
// }

// function showCart() {
//   const cartItemsElement = document.getElementById('cartItems');
//   const cartSummaryElement = document.getElementById('cartSummary');

//   cartItemsElement.innerHTML = '';
//   cartSummaryElement.innerHTML = '';

//   for (let i = 0; i < cart.length; i++) {
//     const item = cart[i];

//     const cartItemElement = document.createElement('div');
//     cartItemElement.classList.add('card', 'mb-2'); // Modificar aquí de 'mb-4' a 'mb-2'
//     const itemContent = `
//       <div class="card-body">
//         <div class="row">
//           <div class="col-md-8">
//             <h5 class="card-title">${item.name}</h5>
//             <p class="card-text">Precio: $${item.price}</p>
//           </div>
//           <div class="col-md-4">
//             <button class="btn btn-danger float-right" onclick="removeFromCart(${i})">Eliminar</button>
//           </div>
//         </div>
//       </div>
//     `;

//     cartItemElement.innerHTML = itemContent;
//     cartItemsElement.appendChild(cartItemElement);
//   }

//   const invoice = generateInvoice();
//   cartSummaryElement.innerHTML = invoice;
// }

loadCart();
showCart();
