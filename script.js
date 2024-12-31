const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

// Open Menu
menuButton.addEventListener("click", () => {
    menuOverlay.style.left = "0";
});

// Close Menu
closeMenu.addEventListener("click", () => {
    menuOverlay.style.left = "-100%";
});
