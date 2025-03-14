// Example of simple form validation (you can expand this later)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const restaurantName = document.getElementById('restaurant-name').value;
    
    if (!name || !email || !restaurantName) {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});
