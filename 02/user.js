// Classe User

export default class User {
  #id;
  #index;
  #name;
  #age;
  #email;
  #gender;

  constructor(jsonData) {
    this.#id = jsonData._id;
    this.#index = jsonData.index;
    this.#name = jsonData.name;
    this.#age = jsonData.age;
    this.#email = jsonData.email;
    this.#gender = jsonData.gender;
  }

  method(param) {
    return null; //optional return
  }

  get id() {
    return this.#id;
  }
  get index() {
    return this.#index;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  get email() {
    return this.#email;
  }
  get gender() {
    return this.#gender;
  }

  // exemplo
  // set name(name) { 
  //   this.#name = name;
  // }
}