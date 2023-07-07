// Definir la clase CartItem
export class CartItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  let cart = [];
  
  export function addToCart(name, price) {
    const item = new CartItem(name, price);
    cart.push(item);
    saveCart();
    showCart();
  }
  
  export function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    showCart();
  }
  
  export function clearCart() {
    cart = [];
    saveCart();
    showCart();
  }
  
  export function calculateTotal() {
    let total = 0;
    for (const item of cart) {
      total += item.price;
    }
    return total;
  }
  
  export function generateInvoice() {
    let invoice = '<h5>Resumen de Compra:</h5><ul>';
    for (const item of cart) {
      invoice += `<li>${item.name} - $${item.price}</li>`;
    }
    invoice += `</ul><p>Total: $${calculateTotal()}</p>`;
    return invoice;
  }
  
  export function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  export function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  }
  
  export function showCart() {
    // Resto del código para mostrar el carrito en la página
    const cartItemsElement = document.getElementById('cartItems');
    const cartSummaryElement = document.getElementById('cartSummary');
  
    cartItemsElement.innerHTML = '';
    cartSummaryElement.innerHTML = '';
  
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
  
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('card', 'mb-2'); // Modificar aquí de 'mb-4' a 'mb-2'
      const itemContent = `
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Precio: $${item.price}</p>
            </div>
            <div class="col-md-4">
              <button class="btn btn-danger float-right" onclick="removeFromCart(${i})">Eliminar</button>
            </div>
          </div>
        </div>
      `;
  
      cartItemElement.innerHTML = itemContent;
      cartItemsElement.appendChild(cartItemElement);
    }
  
    const invoice = generateInvoice();
    cartSummaryElement.innerHTML = invoice;
  }
  
  loadCart();
  showCart();
  