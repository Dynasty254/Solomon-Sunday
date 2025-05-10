// Show a greeting message on page load
window.addEventListener("load", () => {
  console.log("Welcome to Design Dynasty Graphics Tech!");
});

// Back to Top Button Functionality
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🌙 Dark Mode Toggle
const darkToggle = document.createElement("button");
darkToggle.innerHTML = "🌙";
darkToggle.id = "darkToggle";
document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 🖼️ Simple Image Slideshow (cycles through images in #slideshow)
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((s, i) => s.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();
