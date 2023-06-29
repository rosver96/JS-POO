class Carrito {
    constructor() {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    mostrarCarrito() {
      var cartItemsList = document.getElementById('cartItems');
      cartItemsList.innerHTML = '';

      for (var i = 0; i < this.cartItems.length; i++) {
        var cartItem = document.createElement('li');
        cartItem.textContent = this.cartItems[i];
        cartItemsList.appendChild(cartItem);
      }
    }

    agregarAlCarrito() {
      var item = document.getElementById('compraInput').value;
      if (item) {
        this.cartItems.push(item);
        this.mostrarCarrito();
        localStorage.this.setItem('cartItems', JSON.stringify(cartItems));
      }

    }

    vaciarCarrito() {
      this.cartItems = [];
      this.mostrarCarrito();
      localStorage.removeItem('cartItems');
    }
  }


  var carrito = new Carrito();
  carrito.mostrarCarrito();