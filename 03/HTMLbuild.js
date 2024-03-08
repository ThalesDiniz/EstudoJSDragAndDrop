function addItem(text) {
    var content = document.getElementById("contentId");
    content.appendChild(taskItem(text));
}

function taskItem(text) {
  const p = document.createElement("p");
  p.setAttribute("class", "task-text");
  p.innerText = text;
  
  const div = document.createElement("div");
  div.setAttribute("class", "task task-item");
  div.setAttribute("draggable", "true");
  div.appendChild(p);

  return div;
}