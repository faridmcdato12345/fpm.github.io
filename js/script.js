const text =
  "By my hand, the web transforms — elegant, functional, and enduring through the sands of time.";
const typewriterText = document.getElementById("typewriter-text");

let index = 0;

function typeWriterEffect() {
  if (index < text.length) {
    typewriterText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriterEffect, 30); // Adjust speed by changing 100ms
  }
}

const cover = document.querySelector(".cover");
cover.addEventListener("click", function () {
  setTimeout(() => {
    typeWriterEffect();
  }, 100);
});
