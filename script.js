// script.js

// Form validation and simple message
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Simulate sending the form
    document.getElementById('form-message').textContent = "Thank you for contacting me!";
    
    // Reset form
    event.target.reset();
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  