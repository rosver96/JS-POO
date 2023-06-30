class Carrito {
  constructor() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.totalPrice = 0;
  }

  mostrarCarrito() {
    var cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';

    for (var i = 0; i < this.cartItems.length; i++) {
      var cartItem = document.createElement('li');
      cartItem.className = 'list-group-item';
      cartItem.textContent = this.cartItems[i].item + ' - $' + this.cartItems[i].price.toFixed(2);

      var deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-sm btn-danger float-right';
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', this.eliminarItem.bind(this, i));

      cartItem.appendChild(deleteButton);
      cartItemsList.appendChild(cartItem);
    }

    this.actualizarTotal();
  }

  agregarAlCarrito() {
    var item = document.getElementById('compraInput').value;
    var price = parseFloat(document.getElementById('precioInput').value);

    if (item && price && !isNaN(price)) {
      this.cartItems.push({ item: item, price: price });
      this.mostrarCarrito();
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

      document.getElementById('compraInput').value = '';
      document.getElementById('precioInput').value = '';
    }
  }

  eliminarItem(index) {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
      this.mostrarCarrito();
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  vaciarCarrito() {
    this.cartItems = [];
    this.mostrarCarrito();
    localStorage.removeItem('cartItems');
  }

  actualizarTotal() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
    document.getElementById('totalPrice').textContent = this.totalPrice.toFixed(2);
  }
}

var carrito = new Carrito();
carrito.mostrarCarrito();
