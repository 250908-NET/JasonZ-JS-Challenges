function sayHello() {
  alert("Hello from the external file!");
}

let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

function sayGoodbye() {
  alert("Goodbye from the external file!");
}

let btn2 = document.getElementById("goodbyeBtn");
btn2.addEventListener("click", sayGoodbye);
