const mobileMenu = document.querySelector(".mobile-menu");
const navBar = document.getElementById("navbar")

let displayNav = false;

function showNav() {
    if (displayNav === false) {
        navBar.style.display = "flex";
        displayNav = true;
    } else {
        navBar.style.display = "none";
        displayNav = false;
    }
}