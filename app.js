const header = document.querySelector("header");
const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const navs = document.querySelectorAll(".menu li a");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

menuToggle.addEventListener("click", toggleMenu);

navs.forEach((nav) => {
  nav.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
