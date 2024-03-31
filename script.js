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
    { "id": "dff4", "name": "pro gas", "price": "ksh1600" },
    { "id": "dff4", "name": "M gas", "price": "ksh1500" },
];



function showAdmin() {
    // Hide other sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('products').style.display = 'none';

    // Show the admin section
    const adminSection = document.getElementById('admin-section');
    adminSection.style.display = 'block';

    // Show the admin form
    const adminForm = document.getElementById('admin-product-form');
    adminForm.style.display = 'block';
}

        // Function to show home section
        function showHome() {
            // Hide admin section when navigating away from admin page
            document.getElementById('admin-section').style.display = 'none';
            // Show home section
            document.getElementById('main-content').style.display = 'block';
        }

        // Call showAdmin() when navigating to the admin page initially
        showAdmin();

function hideAdmin() {
    // Hide the admin section
    document.getElementById('admin-section').style.display = 'none';
    
    // Also hide the admin form
    document.getElementById('admin-product-form').style.display = 'none';
}



// Function to initialize event listeners
function initEventListeners() {
    document.querySelector('.icon-cart').addEventListener('click', handleViewCart);
    document.getElementById('closeCartViewBtn').addEventListener('click', handleCloseCart);
    document.querySelector('.checkOut').addEventListener('click', handleCheckout);
    document.querySelector('a[href="#admin"]').addEventListener('click', showAdmin);
    document.querySelector('a[href="#Home"]').addEventListener('click', hideAdmin); // Hide admin section when switching to home
    document.querySelector('a[href="#Products"]').addEventListener('click', hideAdmin); // Hide admin section when switching to products
}

// Initialize event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showProducts(); // Initially show the products section
    hideAdmin(); // Hide the admin section initially
    initEventListeners(); // Initialize event listeners - remove this line
});

// Function to handle the submission of the admin product form
document.getElementById('admin-product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value.trim();
    const productPrice = document.getElementById('product-price').value.trim();

    // Check if both name and price are provided
    if (productName && productPrice) {
        // Create a new product object
        const newProduct = {
            id: generateProductId(), // You need to implement a function to generate a unique product ID
            name: productName,
            price: productPrice
        };

        // Add the new product to the cartItems array
        cartItems.push(newProduct);

        // Update cart icon and order list display
        updateCartIcon();
        updateOrderList();

        // Reset the form fields
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';

        // Optionally, you can provide feedback to the admin that the product was successfully added
        alert('Product added successfully!');
    } else {
        // Provide feedback to the admin that both name and price are required
        alert('Please provide both product name and price.');
    }
});

// Function to generate a unique product ID (you need to implement this)
function generateProductId() {
    // You can implement this function based on your requirements
    // For example, you could use a timestamp or a UUID generator
    // Return a unique product ID here
}




// Function to update the order list
function updateOrderList() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    cartItems.forEach(item => {
        const orderItemDiv = document.createElement('div');
        orderItemDiv.classList.add('order-item');

        const name = document.createElement('h2');
        name.textContent = item.name;
        orderItemDiv.appendChild(name);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `${item.price}`;
        orderItemDiv.appendChild(price);

        orderList.appendChild(orderItemDiv);
    });
}

// Get the registration form, login container, and login form
const registrationForm = document.getElementById("registration-form");
const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("login-form");

// Add event listener to the registration form button
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Hide the registration form
    registrationForm.style.display = 'none';

    // Hide the login container
    loginContainer.style.display = 'flex';

    // Show the login form
    loginForm.style.display = 'block';
});

// Function to handle user registration
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert("Registration successful!");
    document.getElementById("registration-form").reset();
});

// Function to handle user login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const usernameOrEmail = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Perform authentication (you can replace this with your authentication logic)
    if (usernameOrEmail === "sandra" && password === "123") {
        // Simulate successful login
        alert("Login successful!");
        document.getElementById("login-form").reset();

        // Hide the login container
        document.querySelector('.login-container').style.display = 'none';

        // Show the main content after successful login
        showMainContent();
    } else {
        // Handle invalid credentials
        alert("Invalid username or password. Please try again.");
    }
});

// Function to show the main content after login or registration
function showMainContent() {
    document.getElementById('main-content').style.display = 'block';
    document.querySelector('.registration-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'none';
}

// Function to show the products
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
    updateOrderList();
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

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);

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
