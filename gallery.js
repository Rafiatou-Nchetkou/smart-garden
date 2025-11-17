const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

// Ouvre la lightbox
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        lightboxImg.src = item.src;
        lightbox.classList.remove("hidden");
    });
});

// Ferme la lightbox
lightboxClose.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});

// Ferme en cliquant en dehors de l'image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add("hidden");
    }
});
