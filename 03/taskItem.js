export default class TaskItem {

  #taskItems = [];
  #dragSrcEl = null;

  constructor() {
    // this.getItems();
    const items = document.querySelectorAll('.task-item');
    items.forEach(element => this.#taskItems.push(element));
    this.#taskItems.forEach((item) => this.#addDragEvent(item));
  }

  addItem(input){
    this.#addDragEvent(input);
    this.#taskItems.push(input);
  }

  handleDragStart(event) {
    // this.getItems();
    event.target.style.opacity = '0.4';
    this.#dragSrcEl = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.#dragSrcEl.innerHTML);
  }

  handleDragEnd(event) {
    event.target.style.opacity = '1';
    this.#taskItems.forEach(element => {
      if (element.classList.contains("task-item")) {
        element.classList.remove("dragover");
      }
    });

  }

  handleDragEnter(event) {
    if (event.target.classList.contains("task-item")) {
      event.target.classList.add("dragover");
    }
  }

  handleDragLeave(event) {
    if (event.target.classList.contains("task-item")) {
      event.target.classList.remove("dragover");
    }
  };

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
  }

  handleDragDrop(event){
    event.preventDefault();
    if (this.#dragSrcEl != event.target) {
      this.#dragSrcEl.innerHTML = event.target.innerHTML;
      event.target.innerHTML = event.dataTransfer.getData('text/html');
    }
    return false;
  }

  #addDragEvent(item){
    item.addEventListener('dragstart', this.handleDragStart.bind(this));
    item.addEventListener('dragend', this.handleDragEnd.bind(this));

    item.addEventListener('dragenter', this.handleDragEnter.bind(this));
    item.addEventListener('dragleave', this.handleDragLeave.bind(this));

    item.addEventListener('dragover', this.handleDragOver.bind(this));
    item.addEventListener('drop', this.handleDragDrop.bind(this));
  }

}

// https://niemvuilaptrinh.medium.com/18-drag-and-drop-for-web-development-9276228ca726