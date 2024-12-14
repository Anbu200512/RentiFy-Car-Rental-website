document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});








// Function to validate the form
function validateForm(event) {
    // Prevent form submission to validate the data
    event.preventDefault();

    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Validate Name (Non-empty, minimum length of 2 characters)
    if (name.trim() === "" || name.length < 2) {
        alert("Please enter a valid name (minimum 2 characters).");
        return false;
    }

    // Validate Email (Simple email pattern)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Message (Non-empty)
    if (message.trim() === "") {
        alert("Please enter a message.");
        return false;
    }

    // If all validations pass, submit the form
    alert("Thank you for your message! We will get back to you shortly.");
    document.getElementById("contact-form").submit(); // Uncomment this to submit the form in a real setup
    return true;
}

// Attach the validation function to the form's submit event
document.getElementById("contact-form").addEventListener("submit", validateForm);
