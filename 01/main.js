
// Eventos:
// drag	...a dragged item (element or text selection) is dragged.
// dragend	...a drag operation ends (such as releasing a mouse button or hitting the Esc key; see Finishing a Drag.)
// dragenter	...a dragged item enters a valid drop target. (See Specifying Drop Targets.)
// dragleave	...a dragged item leaves a valid drop target.
// dragover	...a dragged item is being dragged over a valid drop target, every few hundred milliseconds.
// dragstart	...the user starts dragging an item. (See Starting a Drag Operation.)
// drop	...an item is dropped on a valid drop target. (See Performing a Drop.)

const source = document.getElementById("draggable");
const target = getDragableText();

let dragged = null;

source.addEventListener("dragstart", (event) => {
  dragged = event.target;
});

target.forEach(x => {
  x.addEventListener("dragover", (event) => {
    event.preventDefault(); // Evita ações indesejadas
  });

  x.addEventListener("drop", (event) => {
    event.preventDefault();
    
    if (event.target.className === "box droptarget") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  });
});

function getDragableText() {
  let drops = document.getElementsByClassName("droptarget");
  var targets = [];

  for (let i = 0; i < drops.length; i++) {
      targets.push(drops[i]);
  }
  return targets;
};