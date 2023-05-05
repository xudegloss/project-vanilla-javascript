const navBtn = document.getElementById("nav__btn");
const navContainer = document.getElementById("nav__container");
const nav = document.getElementById("nav");
const navTitle = document.getElementById("nav__title");
const targetArray = [navBtn, navContainer, nav, navTitle];

navBtn.addEventListener("click", () => {
  // navContainer.classList.toggle("active");
  // navBtn.classList.toggle("active");
  // nav.classList.toggle("active");
  // navTitle.classList.toggle("active");

  // 계속 반복되는 코드가 있어서, for of 반복문을 이용하여 객체를 편리하게 반복하고, 반복되는 코드의 양을 줄여주었다.
  for (let i of targetArray) {
    i.classList.toggle("active");
  }
});
