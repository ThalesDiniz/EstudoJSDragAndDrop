// Classe databox

export default class DataBox {

  constructor(HTMLitems) {
    HTMLitems.forEach((item) => {
      item.addEventListener('dragstart', this.handleDragStart.bind(this, item));
      item.addEventListener('dragend', this.handleDragEnd.bind(this, item, HTMLitems));
    });
  }

  handleDragStart(item, event) {
    item.style.opacity = '0.4';

    event.dataTransfer.clearData();

    const json = this.#MountJsonData(event.target.querySelectorAll('.user-info')[0]);
    event.dataTransfer.setData("text/plain", json);
  }

  handleDragEnd(item, HTMLitems, event) {
    event.preventDefault();
    HTMLitems.forEach(element => {
      element.style.opacity = '1';
      if (element === item) {
        item.style.opacity = '0.4';
      }
    });
  }

  #MountJsonData(hiddenInput) {
    var obj = new Object();
    obj.id = hiddenInput.getAttribute('data-id');
    obj.index = hiddenInput.getAttribute('data-index');
    obj.name = hiddenInput.getAttribute('data-name');
    obj.age = hiddenInput.getAttribute('data-age');
    obj.email = hiddenInput.getAttribute('data-email');
    obj.gender = hiddenInput.getAttribute('data-gender');
    return JSON.stringify(obj);
  }
}
