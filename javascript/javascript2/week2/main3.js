console.log("Script loaded");

function renderProducts(products) {
  const ul = document.createElement('ul'); 

  products.forEach(product => { 
    const li = document.createElement('li'); 
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    ul.appendChild(li);
  });

  document.body.appendChild(ul); 
}

const products = getAvailableProducts(); 

function filterProductsByMaxPrice(maxPrice) {
  const filteredProducts = products.filter(product => product.price <= maxPrice);
  return filteredProducts;
}

const filterBtn = document.querySelector('#filter-btn');
const maxPriceInput = document.querySelector('#max-price');

filterBtn.addEventListener('click', () => {
  const maxPrice = maxPriceInput.value;
  const filteredProducts = filterProductsByMaxPrice(maxPrice);
  renderProducts(filteredProducts);
});
