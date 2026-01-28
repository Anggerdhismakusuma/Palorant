// Toggle class active
const menuContainer = document.querySelector(".menu-container");
document.querySelector("#hamburger-menu").onclick = () => {
  menuContainer.classList.toggle("active");
};

// Click to close sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menuContainer.contains(e.target)) {
    menuContainer.classList.remove("active");
  }
});
