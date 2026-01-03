/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(r => observer.observe(r));

/* HERO TEXT SWAP (VIDEO STYLE) */
const swapTexts = document.querySelectorAll(".swap-text .text");
let currentIndex = 0;

setInterval(() => {
  swapTexts[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % swapTexts.length;
  swapTexts[currentIndex].classList.add("active");
}, 2500);

/* HERO TITLE TYPING ANIMATION (VIDEO STYLE) */

const text = " Tejeswar";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 90); // typing speed (video-like)
  }
}

window.addEventListener("load", typeEffect);



