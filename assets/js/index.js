const navbar = document.querySelector("header nav");
const navBurger = document.querySelector(".nav-burger i.fas.fa-bars");
const navList = document.querySelector(".nav-list");

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
};

navBurger.addEventListener("click", function () {
    navList.classList.toggle("slide");
});

window.addEventListener("click", function (e) {
    if (e.target !== navBurger && e.target !== navList) {
        navList.classList.remove("slide");
    }
});
