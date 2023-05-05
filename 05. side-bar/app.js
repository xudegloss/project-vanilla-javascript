const footerImg = document.querySelectorAll(".item");
const sidebarContainer = document.querySelector("#sidebar__container");
const sidebarBtn = document.querySelector("#sidebar__btn");
const titleBtn = document.querySelector("#title__btn");

// font awesome 이미지에 클래스 추가한 뒤에, 스타일 태그 가져와서 변경하면 된다.

footerImg.forEach((e) => {
  e.addEventListener("mouseover", () => {
    const originalColor = getComputedStyle(e).color; // css 속성값 중 color 가져오기.
    const newColor = "#00035e";

    e.style.cssText = `color : ${newColor};`; // 인라인 스타일 요소 가져오기.
    e.addEventListener("mouseleave", () => {
      e.style.cssText = `color : ${originalColor};`;
    });
  });
});

sidebarBtn.addEventListener("click", () => {
  sidebarContainer.classList.toggle("active");
});

titleBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("active");
});
