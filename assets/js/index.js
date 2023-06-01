const navbar = document.querySelector("header nav");

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
};
