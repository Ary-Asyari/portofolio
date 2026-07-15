// Lightbox for project screenshots
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".card-thumb").forEach((btn) => {
  btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.img;
    lightboxImg.alt = btn.dataset.caption || "";
    lightboxCaption.textContent = btn.dataset.caption || "";
    lightbox.classList.add("is-open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Render a "Kunjungi Situs" button only for cards that have a live link set
document.querySelectorAll(".card[data-link]").forEach((card) => {
  const link = card.dataset.link;
  if (link) {
    const actions = card.querySelector(".card-actions");
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "btn btn-outline";
    a.textContent = "Kunjungi Situs";
    actions.appendChild(a);
  }
});
