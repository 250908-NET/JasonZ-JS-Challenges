function greetUser() {
  let name = document.getElementById("nameInput").value.trim();
  let color = document.getElementById("colorInput").value.trim();

  if (name === "") {
    alert("Please enter your name first!");
  } 

  switch (color.toLowerCase()) {
    case "red":
      alert("Hello, " + name + "! Red is a great color.");
      break;
    case "blue":
      alert("Hello, " + name + "! Blue is nice, but it's just... so blasé.");
      break;
    case "green":
      alert("Hello, " + name + "! Green is pretty cringe ngl.");
      break;
    case "fuchsia":
      alert("Hello, " + name + "! That is not your favorite color.");
      break;
    default:
      alert("Hello, " + name + "! Your favorite color is " + color + ".");
      break;
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);
