const toggleBars = document.querySelector(".fa-bars");
const toggleClose = document.querySelector(".fa-xmark");
const modalMenu = document.querySelector(".modal-menu");
// Load Project In

toggleBars.addEventListener("click", (e) => {
  console.log(e.target);
  if (!e.target.classList.contains(".hide-toggle")) {
    e.target.classList.add("hide-toggle");
    toggleClose.classList.remove("hide-toggle");
    modalMenu.classList.remove("hide-modal-menu");
  }
});
toggleClose.addEventListener("click", (e) => {
  console.log(e.target);
  if (!e.target.classList.contains(".hide-toggle")) {
    e.target.classList.add("hide-toggle");
    toggleBars.classList.remove("hide-toggle");
    modalMenu.classList.add("hide-modal-menu");
  }
});
