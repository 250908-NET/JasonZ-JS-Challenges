let imgIndex = 0;
const images = [
  ["bloopySmug.png", "bloopy smug"],
  ["bloopyStare.png", "bloopy stare"]
]

function switchImage() {
  imgIndex = (imgIndex + 1) % images.length;
  let img = document.getElementById("bloopy");
  img.src = images[imgIndex][0];
  img.alt = images[imgIndex][1];
}

function changeBgColor() {
  let body = document.body;
  body.classList.toggle("dark-mode");

  let text = document.querySelectorAll("h1, p");
  for (const e of text) {
    e.classList.toggle("dark-mode");
  }
}

document.getElementById("switchButton").addEventListener("click", switchImage);
document.getElementById("colorButton").addEventListener("click", changeBgColor);
