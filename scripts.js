// scripts.js

let cartCount = 0;

function addToCart(productId) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Producto " + productId + " agregado al carrito.");
}
