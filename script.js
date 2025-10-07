function addListItem() {
  let container = document.getElementById("container");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  container.appendChild(newItem);
}

document.getElementById("addButton").addEventListener("click", addListItem);
