const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu-navegacion");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (menu.classList.contains("spread") && e.target != menu && e.target != hamburguer) {
    menu.classList.toggle("spread");
  }
});