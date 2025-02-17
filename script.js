let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop:true,

  });

  // script.js
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('.header');
const navbarLinks = document.querySelectorAll('.navbar a');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    
    // Toggle dark class for navbar links
    navbarLinks.forEach(link => {
        link.classList.toggle('dark');
    });
    
    // Update button text
    if (body.classList.contains('dark')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can process the form data if needed
    // For example, you can use fetch to send data to a server

    // Show the success message
    document.getElementById('success').style.display = 'block';

    // Optionally, you can clear the form fields
    document.getElementById('contactForm').reset();
    
    return false; // Prevents default form submission behavior
}




