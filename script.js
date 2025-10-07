let imgIndex = 0;
const images = [
  ["bloopySmug.png", "bloopy smug"],
  ["bloopyStare.png", "bloopy stare"]
]

let colorIndex = 0;
const colors = [
  "white",
  "cyan",
  "pink",
  "white",
  "pink",
  "cyan",
]

function switchImage() {
  imgIndex = (imgIndex + 1) % images.length;
  let img = document.getElementById("bloopy");
  img.src = images[imgIndex][0];
  img.alt = images[imgIndex][1];
}

function changeBgColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
}

document.getElementById("switchButton").addEventListener("click", switchImage);
document.getElementById("colorButton").addEventListener("click", changeBgColor);
