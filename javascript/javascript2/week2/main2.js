console.log("Script loaded");

function renderProducts(products) {
  const ul = document.createElement('section ul');

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
renderProducts(products); 

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase(); 
  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase();
    const productPrice = product.price;
    return productName.includes(searchValue) || productPrice >= searchValue;
  });
  renderProducts(filteredProducts); 
});
