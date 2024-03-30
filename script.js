// Define global variables
let cartItems = [];

// Define product data as an array of objects
const products = [
    {
        "id": "3329",
        "name": "pro gas(refill)",
        "price": "ksh1300"
      },
      {
        "id": "d9dc",
        "name": "k gas",
        "price": "ksh1400"
      },
      {
        "id": "e549",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "9d3c",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "d46c",
        "name": "total(refill)",
        "price": "ksh1300"
      },
      {
        "id": "2a05",
        "name": "rubis",
        "price": "ksh2000"
      },
      {
        "id": "3b7e",
        "name": "k gas(refill)",
        "price": "ksh1300"
      },
      {
        "id": "4dad",
        "name": "pro gas",
        "price": "ksh1300"
      },
      {
        "id": "293f",
        "name": "total gas(refill)",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "k gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "k gas",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "rubis gas",
        "price": "ksh1300"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "Pika gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "E gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "M gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "pro gas",
        "price": "ksh1600"
      },
      {
        "id": "dff4",
        "name": "M gas",
        "price": "ksh1500"
      },
    ]

    function showProducts() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('products').style.display = 'block';
        displayProducts(products);
    }
    
    // Function to display products on the page
    function displayProducts(products) {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
    
            // Create and append product name
            const name = document.createElement('h2');
            name.textContent = product.name;
            itemDiv.appendChild(name);
    
            // Create and append product price
            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `${product.price}`;
            itemDiv.appendChild(price);
    
            // Create and append "Add to Cart" button
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.addEventListener('click', () => addToCart(product));
            itemDiv.appendChild(addButton);
    
            // Append the item to the product list
            productList.appendChild(itemDiv);
        });
    }
    
    // Function to add a product to the cart
    function addToCart(product) {
        cartItems.push(product);
        updateCartIcon();
    }
    
    // Function to update the cart icon with the number of items
    function updateCartIcon() {
        const cartIcon = document.querySelector('.icon-cart span');
        cartIcon.textContent = cartItems.length;
    }
    
    // Initialize event listeners
    function initEventListeners() {
        document.querySelector('.icon-cart').addEventListener('click', handleViewCart);
        document.getElementById('closeCartViewBtn').addEventListener('click', handleCloseCart);
        document.querySelector('.checkOut').addEventListener('click', handleCheckout);
    }
    
    // Function to handle the "View Cart" action
    function handleViewCart() {
        const shoppingCart = document.querySelector('.cartTab');
        shoppingCart.classList.remove('hidden');
        document.body.classList.add('showCart');
        updateCartDisplay();
    }
    
    // Function to handle the "Close Cart" action
    function handleCloseCart() {
        const shoppingCart = document.querySelector('.cartTab');
        shoppingCart.classList.add('hidden');
        document.body.classList.remove('showCart');
    }
    
    // Function to handle the checkout process
    function handleCheckout(event) {
        event.preventDefault();
        
        // Get form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
    
        // Validate form fields
        if (name === '' || email === '' || address === '') {
            alert('Please fill out all fields.');
            return;
        }
    
        // If all fields are filled out, proceed with order placement
        placeOrder(name, email, address);
    }
    
    // Function to place the order
    function placeOrder(name, email, address) {
        // Here you would typically send the order details to the server for processing
        // For this example, we'll simply display an alert indicating successful order placement
        alert('Order placed successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nAddress: ' + address);
    
        // Clear the cart and update the display
        cartItems = [];
        updateCartIcon();
        updateCartDisplay();
    
        // Close the cart view
        handleCloseCart();
    }
    
    // Function to update the cart display
    function updateCartDisplay() {
        const cartItemList = document.getElementById('cartItemList');
        cartItemList.innerHTML = '';
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('item');
    
            const name = document.createElement('h2');
            name.textContent = item.name;
            cartItemDiv.appendChild(name);
    
            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `${item.price}`;
            cartItemDiv.appendChild(price);
    
            cartItemList.appendChild(cartItemDiv);
        });
    }
    // Function to place the order
function placeOrder(name, email, address) {
    // Here you would typically send the order details to the server for processing
    // For this example, we'll simply display an alert indicating successful order placement
    window.alert('Order placed successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nAddress: ' + address);

    // Clear the cart and update the display
    cartItems = [];
    updateCartIcon();
    updateCartDisplay();

    // Close the cart view
    handleCloseCart();
}

    // Function to show the home section
    function showHome() {
        document.getElementById('home').style.display = 'block';
        document.getElementById('products').style.display = 'none';
    }
    
    // Initialize event listeners when the page loads
    document.addEventListener('DOMContentLoaded', function() {
        showProducts();
        initEventListeners();
    });