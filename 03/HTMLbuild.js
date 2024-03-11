function addItem(inputELement, event) {
  const content = document.getElementById("contentId");
  content.appendChild(inputELement);
}

function createTaskItem() {
  const inputValue = document.getElementById("inputId").value;

  const p = document.createElement("p");
  p.setAttribute("class", "task-text");
  p.innerText = inputValue;
  
  const div = document.createElement("div");
  div.setAttribute("class", "task task-item");
  div.setAttribute("draggable", "true");
  div.appendChild(p);
  
  return div;
}

export { addItem, createTaskItem };