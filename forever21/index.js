// Clase Ropa
class Ropa {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    calcularDescuento() {
      const descuento = Math.floor(Math.random() * 50) + 1; // Descuento aleatorio entre 1 y 50
      return this.precio - (this.precio * descuento) / 100;
    }
  
    calcularDescuentoConBono() {
      const descuento = Math.floor(Math.random() * 50) + 1; // Descuento aleatorio entre 1 y 50
      let precioConDescuento = this.precio - (this.precio * descuento) / 100;

      const bonus = "FOREVERSTORE";
      if (bonus === "FOREVERSTORE") {
        const bonusDescuento = Math.floor(Math.random() * 15) + 1; // Descuento adicional aleatorio entre 1 y 15
        precioConDescuento -= (precioConDescuento * bonusDescuento) / 100;
      }
  
      return precioConDescuento;
    }

  
  }
  
  // Crear objetos Ropa
  const jeans = new Ropa("Jeans", 40);
  const shirt = new Ropa("Shirt", 60);
  const skirt = new Ropa("Skirt", 80);
  
  // Elementos del DOM
  const productCards = document.querySelectorAll(".product-card");
  
  // Función para mostrar los precios en la card seleccionada
  function showPrices(card, ropa) {
    const initialPrice = ropa.precio.toFixed(2);
    const discountedPrice = ropa.calcularDescuento().toFixed(2);
    const totalPrice = ropa.calcularDescuentoConBono().toFixed(2);
  
    const priceElement = card.querySelector(".product-price");
    priceElement.textContent = `$${initialPrice} (Discounted: $${discountedPrice} - Total: $${totalPrice})`;
  }
  
  // Agregar evento de clic a cada card de producto
  productCards.forEach((card) => {
    const productName = card.querySelector(".product-name").textContent;
  
    // Asignar objeto Ropa según el nombre del producto
    let ropa;
    switch (productName) {
      case "Jeans":
        ropa = jeans;
        break;
      case "Shirt":
        ropa = shirt;
        break;
      case "Skirt":
        ropa = skirt;
        break;
    }
  
    // Agregar evento de clic a la imagen del producto
    const productImg = card.querySelector(".product-img");
    productImg.addEventListener("click", () => {
      showPrices(card, ropa);
    });
  });

  