function calculate(a, b, operator) {
  switch (operator.trim()) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

function add() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = calculate(num1, num2, "+");
  document.getElementById("result").textContent = `Result: ${result}`;
}

function subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = calculate(num1, num2, "-");
  document.getElementById("result").textContent = `Result: ${result}`;
}

function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = calculate(num1, num2, "*");
  document.getElementById("result").textContent = `Result: ${result}`;
}

function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = calculate(num1, num2, "/");
  document.getElementById("result").textContent = `Result: ${result}`;
}

document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subtractBtn").addEventListener("click", subtract);
document.getElementById("multiplyBtn").addEventListener("click", multiply);
document.getElementById("divideBtn").addEventListener("click", divide);
