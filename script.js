let input = document.getElementById("taskInput");
let addButton = document.getElementById("addTask");
let clearButton = document.getElementById("clearCompleted");
let list = document.getElementById("taskList");

addButton.addEventListener("click", function() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});

clearButton.addEventListener("click", function() {
  let doneItems = document.getElementsByClassName("done");
  while (doneItems.length > 0) {
    list.removeChild(doneItems[0]);
  }
});

const square = n => n * n;

const nums = [1, 2, 3, 4, 5];

console.log(nums.map(square));
