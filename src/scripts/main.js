// Loader
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  document.body.classList.remove("overflow-y-hidden");
  document.body.classList.remove("h-screen");
  loader.classList.add("hidden");
});

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fadeElements = gsap.utils.toArray(".fade");
fadeElements.forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    duration: 0.5,
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
    duration: 0.3,
    ease: "sine",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  });
});
