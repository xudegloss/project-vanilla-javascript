const navBtn = document.getElementById("nav__btn");
const navContainer = document.getElementById("nav__container");
const nav = document.getElementById("nav");
const navTitle = document.getElementById("nav__title");

const toggleFunc = () => {};

navBtn.addEventListener("click", () => {
  navContainer.classList.toggle("active");
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
  navTitle.classList.toggle("active");
});
