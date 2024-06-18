// import "./styles.css";

document.addEventListener("DOMContentLoaded", function handleCartEvents() {
  const cartElement = document.getElementById("cart");
  // const ctaAddToCart = document.querySelectorAll(".add-to-cart");
  const cartTotalEle = document.getElementById('cart-count');
  const productsContainer = document.getElementById('products');

  let count = 0;

  // ctaAddToCart.forEach((buttonEle, index) => {
  //   buttonEle.addEventListener("click", () => addToCart(index));
  // });

  // event delegation
  productsContainer.addEventListener('click', function(event){
    console.log(event.target);
    const item = event.target.closest('.product-item').querySelector('.product-title').textContent;
    addToCart(item);
  })

  function isItemPresent(item){
    const cartTitles = cartElement.querySelectorAll('.cart-title');

    return Array.from(cartTitles).some(cartTitle => cartTitle.textContent === item);
  }

  function addToCart(item) {
    if(isItemPresent(item)){
      alert('Item is already added in the cart');
      return;
    } 
    count++;
    updateToCart(item);
  }

  function removeFromCart(event){
    event.target.closest('.cart-item').remove();
  }

  function updateToCart(item) {
      const newCartItem = document.createElement("div");
      newCartItem.classList.add('cart-item');
      newCartItem.innerHTML = `
        <span class='cart-title'>${item}</span>
        <button class='remove-from-cart'>Remove</button>
      `;

      newCartItem.querySelector('.remove-from-cart').addEventListener('click', removeFromCart);

      cartElement.appendChild(newCartItem);
      cartTotalEle.textContent = `(${count})`;
  }
});
