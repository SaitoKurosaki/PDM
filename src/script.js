const date = document.querySelector("#date");
const asidebar = document.querySelector(".asidebar");
const burgerbtn = document.querySelector(".burgerbtn");
const closebtn = document.querySelector(".closebtn");
date.textContent = new Date().getFullYear();
burgerbtn.addEventListener("click", () => {
  asidebar.classList.remove("translate-x-full");
});

closebtn.addEventListener("click", () => {
  asidebar.classList.add("translate-x-full");
});
