const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  document.body.classList.remove("overflow-y-hidden");
  document.body.classList.remove("h-screen");
  loader.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("move-up")) {
        entry.target.classList.add("stop-move-up");
      }
      if (entry.target.classList.contains("fade")) {
        entry.target.classList.add("stop-fade");
      }
    }
  });
});
const moveUpElements = document.querySelectorAll(".move-up");
const fadeElements = document.querySelectorAll(".fade");
moveUpElements.forEach((el) => observer.observe(el));
fadeElements.forEach((el) => observer.observe(el));
