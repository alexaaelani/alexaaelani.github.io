const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.querySelector('ul').classList.toggle('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.querySelector('ul').classList.remove('show');
        hamburger.classList.remove('active');
    });
});