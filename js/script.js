// JavaScript Connected
console.log("NovaAI Loaded Successfully!");

// Welcome Popup
alert("Welcome to NovaAI!");

// Select Hero Button
const button = document.getElementById("start-btn");

// Print Button in Console
console.log(button);

// Click Event
button.addEventListener("click", function(){

    alert("Thanks for choosing NovaAI!");

});
// ===============================
// MOBILE MENU TOGGLE
// ===============================
 
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
 
if (menuToggle && navLinks) {
 
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
 
    // close the menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
 
}
