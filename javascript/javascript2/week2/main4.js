console.log("Script loaded");

function renderProducts(products) {
  const ul = document.createElement('ul'); 

  products.forEach(product => { 
    const li = document.createElement('li'); 
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <button class="add-to-cart-button">Add to Cart</button> // add a button to each product
    `;
    ul.appendChild(li); 
  });

  document.body.appendChild(ul); 

  const addToCartButtons = document.querySelectorAll('.add-to-cart-button'); 
  addToCartButtons.forEach(button => { 
    button.addEventListener('click', () => { 
      const productName = button.parentNode.querySelector('h3').textContent;
      console.log(`${productName} added to cart!`);
    });
  });
}

const products = getAvailableProducts(); 
renderProducts(products); 

