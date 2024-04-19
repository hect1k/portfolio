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

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMode = window.matchMedia("(prefers-reduced-motion: reduce)");

const fadeElements = gsap.utils.toArray(".fade");
fadeElements.forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    duration: reducedMode.matches ? 0 : 0.5,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  });
});

const moveUpElements = gsap.utils.toArray(".move-up");
moveUpElements.forEach((element) => {
  gsap.from(element, {
    y: 100,
    duration: reducedMode.matches ? 0 : 0.3,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  });
});
