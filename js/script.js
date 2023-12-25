 const navbarNav = document.querySelector
('.navbar-nav');
// if click Menu
document.querySelector('#menu').
onclick = () => {
        navbarNav.classList.toggle('active');
    };

// click ouside sidebar for close menu
const menu = document.querySelector
('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
