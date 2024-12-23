function toggleMenu() {
    const menuLinks = document.querySelector(".menulinks");
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the "open" class for both the menu and icon container
    menuLinks.classList.toggle("open");
    icon.classList.toggle("open");
}
