console.log("Script loaded");

function renderProducts(products) {
  const ul = document.createElement('ul'); // create a new ul element

  products.forEach(product => { // loop through each product in the products array
    const li = document.createElement('li'); // create a new li element
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    ul.appendChild(li); // append the li element to the ul element
  });

  document.body.appendChild(ul); // append the ul element to the document body
}

const products = getAvailableProducts(); // get the array of products
renderProducts(products); // render the list of products
