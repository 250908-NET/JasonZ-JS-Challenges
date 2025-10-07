let index = 0;
const images = [
  ["bloopySmug.png", "bloopy smug"],
  ["bloopyStare.png", "bloopy stare"]
]

function switchImage() {
  index = (index + 1) % images.length;
  let img = document.getElementById("bloopy");
  img.src = images[index][0];
  img.alt = images[index][1];
}

document.getElementById("switchButton").addEventListener("click", switchImage);
