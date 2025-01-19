// Loader
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  document.body.classList.remove("overflow-y-hidden");
  document.body.classList.remove("h-screen");
  loader.classList.add("hidden");
  setTimeout(() => {
    loader.remove();
  }, 1000);
});
