export default class TaskItem {

  constructor() {
    this.getItems();
  }

  handleDragStart(event) {
    this.getItems();
    event.target.style.opacity = '0.4';
  }

  handleDragEnd(event) {
    event.target.style.opacity = '1';
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
    const element = document.querySelectorAll('.task-item')
    element
  }

  getItems() {
    const HTMLitems = document.querySelectorAll('.task-item');

    HTMLitems.forEach((item) => {
      item.addEventListener('dragstart', this.handleDragStart.bind(this));
      item.addEventListener('dragend', this.handleDragEnd.bind(this));

      item.addEventListener('dragenter', this.handleDragEnter.bind(this));
      item.addEventListener('dragleave', this.handleDragLeave.bind(this));

      item.addEventListener('dragover', this.handleDragOver.bind(this));
    });
  }
}

// https://niemvuilaptrinh.medium.com/18-drag-and-drop-for-web-development-9276228ca726