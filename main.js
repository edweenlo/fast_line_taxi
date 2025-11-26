const navToggle = document.getElementById("navToggle");
const navOverlay = document.getElementById("navOverlay");
const navClose = document.getElementById("navClose");

navToggle.addEventListener("click", () => {
    navOverlay.classList.add("open");
});

navClose.addEventListener("click", () => {
    navOverlay.classList.remove("open");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-overlay-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navOverlay.classList.remove("open");
    });
});
