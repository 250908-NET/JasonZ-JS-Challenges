function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);
