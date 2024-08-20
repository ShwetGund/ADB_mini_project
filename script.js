// script.js

// Login form submission
function handleLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        window.location.href = "menu.html";
    } else {
        alert("Please fill in all fields.");
    }
}

// Dynamic Signup form generation
function loadSignupForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const entity = urlParams.get('entity');
    const form = document.getElementById('signupForm');

    const formFields = {
        customer: `
            <input type="text" placeholder="Name" required>
            <input type="text" placeholder="Customer ID" required>
            <input type="email" placeholder="Email" required>
            <input type="tel" placeholder="Contact" required>
            <input type="password" placeholder="Password" required>
            <input type="text" placeholder="Address" required>`,
        shopping_cart: `
            <input type="text" placeholder="Cart ID" required>
            <input type="number" placeholder="Quantity" required>
            <input type="number" placeholder="Total Price" required>`,
        product: `
            <input type="text" placeholder="Product ID" required>
            <input type="text" placeholder="Product Name" required>
            <input type="number" placeholder="Price" required>
            <input type="number" placeholder="Stock" required>`,
        category: `
            <input type="text" placeholder="Category ID" required>
            <input type="text" placeholder="Category Name" required>`
    };

    form.innerHTML = formFields[entity] + `<button type="submit">Signup</button>`;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert(entity.charAt(0).toUpperCase() + entity.slice(1) + " Signup Successful!");
        window.location.href = "entity-login.html?entity=" + entity;
    });
}

// Entity Login form generation
function loadEntityLoginForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const entity = urlParams.get('entity');
    const form = document.getElementById('entityLoginForm');

    const loginForms = {
        customer: `
            <input type="text" placeholder="Customer ID" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>`,
        shopping_cart: `
            <input type="text" placeholder="Cart ID" required>
            <input type="number" placeholder="Quantity" required>
            <input type="number" placeholder="Total Price" required>`
    };

    form.innerHTML = loginForms[entity] + `<button type="submit">Login</button>`;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert(entity.charAt(0).toUpperCase() + entity.slice(1) + " Login Successful!");
    });
}
