function turnRed() {
  let text = document.getElementById("text");
  text.style.color = "#FF0000";
  text.style.fontWeight = "bold";
}

function resetRed() {
  let text = document.getElementById("text");
  text.style.color = "#000000";
  text.style.fontWeight = "normal";
}

document.getElementById("redBtn").addEventListener("click", turnRed);
document.getElementById("resetBtn").addEventListener("click", resetRed);
