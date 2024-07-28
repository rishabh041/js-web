// import "./styles.css";

document.addEventListener("DOMContentLoaded", function handleCartEvents() {
  // const ctaAddToCart = document.querySelectorAll(".add-to-cart");
  const productsContainer = document.getElementById('product-list');
  const cartContainer = document.getElementById("cart-list");
  const cartTotalEle = document.getElementById('cart-count');

  let count = 0;

  // we can do this  by event delegation
  // ctaAddToCart.forEach((buttonEle, index) => {
  //   buttonEle.addEventListener("click", () => addToCart(index));
  // });

  // event delegation
  productsContainer.addEventListener('click', function(event){
    // below code is for making whole cart clickable ideally we should do for button only
    // const item = event.target.closest('.product-item').querySelector('.product-title').textContent;

    if(event.target.matches('.add-to-cart')){
      const product = event.target.closest('.product-item');
      const itemName = product.querySelector('.product-title').textContent;
      product.remove();
      addToCart(itemName);
    }
  })

  cartContainer.addEventListener('click', function(event){
    if(event.target.matches('.remove-from-cart')){
      const cartItem = event.target.closest('.cart-item');
      const itemName = cartItem.querySelector('.cart-title').textContent;
      cartItem.remove();
      removeFromCart(itemName);
    }
  })

  // function isItemPresent(item){
  //   const cartTitles = cartContainer.querySelectorAll('.cart-title');

  //   return Array.from(cartTitles).some(cartTitle => cartTitle.textContent === item);
  // }

  function updateCount(){
    cartTotalEle.textContent = `(${count})`;
  }

  function addToCart(itemName) {
    // this logic would we suitable if we retain the item from product to cart
    // but in the given problem statement we need to move to cart on addition and remove on deletion
    // if(isItemPresent(item)){
    //   alert('Item is already added in the cart');
    //   return;
    // } 
    count++;

    const li = document.createElement('li');
    li.className = 'cart-item';

    const span = document.createElement('span');
    span.className = 'cart-title';
    span.textContent = itemName;
    li.appendChild(span);

    const button = document.createElement('button');
    button.className = 'remove-from-cart';
    button.textContent = 'Remove';
    li.appendChild(button);

    cartContainer.appendChild(li);

    updateCount();
    // updateToCart(item);
  }

  function removeFromCart(itemName){
    count--;

    const li = document.createElement('li');
    li.className = 'product-item';

    const span = document.createElement('span');
    span.className = 'product-title';
    span.textContent = itemName;
    li.appendChild(span);

    const button = document.createElement('button');
    button.className = 'add-to-cart';
    button.textContent = 'Add';
    li.appendChild(button);

    productsContainer.appendChild(li);

    updateCount();
  }
  // function updateToCart(item) {
  //     const newCartItem = document.createElement("div");
  //     newCartItem.classList.add('cart-item');
  //     newCartItem.innerHTML = `
  //       <span class='cart-title'>${item}</span>
  //       <button class='remove-from-cart'>Remove</button>
  //     `;

  //     newCartItem.querySelector('.remove-from-cart').addEventListener('click', removeFromCart);

  //     cartContainer.appendChild(newCartItem);
  //     cartTotalEle.textContent = `(${count})`;
  // }
});
