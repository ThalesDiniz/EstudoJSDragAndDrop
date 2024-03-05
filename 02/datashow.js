// Classe datashow
import { buildCardShow, buildTable } from "./utils.js";

export default class DataShow {

  // Objetos html filhos contam como 'dragleave',
  // A variaavel counter força que o .remove seja executado apenas 
  // quando o mouse sair do do objeto html certo.
  #counter = 0;

  // Flag para indicar se ocorreu um drag/drop
  #dropSuccess = false;
  #activeUser = null;

  #HTMLid = null;

  constructor(HTMLid) {
    this.#HTMLid = HTMLid;
    this.#linkObject();
  }

  get dropSuccess(){
    return this.#dropSuccess;
  }

  get activeUser(){
    return this.#activeUser;
  }

  handleDragEnter(item, event) {
    this.#counter++;
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.add("dragover");
    }
  };

  handleDragLeave(item, event) {
    this.#counter--;
    if (this.#counter === 0) {
      this.#limparCartao(event);
    }
  };

  handleDragOver(event) {
    event.preventDefault(); // prevent default to allow drop
  };

  handleDrop(event) {
    event.preventDefault(); // prevent default action (open as a link for some elements)
    const hiddenInput = event.dataTransfer.getData("userinfo");
    const user = JSON.parse(hiddenInput);
    
    // Preparando card 'dropavel'
    const card = buildCardShow(user);
    const divDroptarget = document.getElementById("droptarget");
    const parentDroptarget = divDroptarget.parentNode;

    parentDroptarget.removeChild(divDroptarget);
    parentDroptarget.prepend(card);
    this.#linkObject();

    // Preparando tabela
    const table = buildTable(user);
    const divTableData = document.getElementById("tableData");
    const parentTable = divTableData.parentNode;

    parentTable.removeChild(divTableData);
    parentTable.appendChild(table);

    this.#activeUser = user.name;
    this.#dropSuccess = true;

    this.#counter--;
    if (this.#counter === 0) {
      this.#limparCartao(event);
    }
  }

  #limparCartao(event) {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("dragover");
    }
  }

  #linkObject(){
    const HTMLitem = document.getElementById(this.#HTMLid);
    HTMLitem.addEventListener("dragenter", this.handleDragEnter.bind(this, HTMLitem));
    HTMLitem.addEventListener("dragleave", this.handleDragLeave.bind(this, HTMLitem));
    HTMLitem.addEventListener("dragover", this.handleDragOver.bind(this));
    HTMLitem.addEventListener("drop", this.handleDrop.bind(this));
  }
}
