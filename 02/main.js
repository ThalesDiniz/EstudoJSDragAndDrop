
import User from "./user.js";
import DataBox from "./databox.js";
import DataShow from "./datashow.js";
import { buildCardInfo } from "./utils.js";


let serverResponse = // Simulando uma resposta de servidor
  '[{"_id":"65e21b6e553f8b64e0be8d53","index":0,"name":"Wilcox Snyder","age":35,"email":"wilcoxsnyder@remotion.com","gender":"male"},' +
  '{"_id":"65e21b6e21b2c7708f86736f","index":1,"name":"Valenzuela Frank","age":36,"email":"valenzuelafrank@remotion.com","gender":"male"},' +
  '{"_id":"65e21b6e09d86b4ba72d2b81","index":2,"name":"Kerri Walters","age":29,"email":"kerriwalters@remotion.com","gender":"female"},' +
  '{"_id":"65e21b6e39f8e3888f65a232","index":3,"name":"Bryant Saunders","age":37,"email":"bryantsaunders@remotion.com","gender":"male"},' +
  '{"_id":"65e21b6e08999f000f63466d","index":4,"name":"Case Moran","age":25,"email":"casemoran@remotion.com","gender":"male"},' +
  '{"_id":"65e21b6e942342f05eeebebe","index":5,"name":"Mariana Melendez","age":20,"email":"marianamelendez@remotion.com","gender":"female"}]';

let usersJsonList = JSON.parse(serverResponse);
let users = [];

usersJsonList.forEach(element => {
  users.push(new User(element))
});

function CriarCartoes(users) {
  const container = document.getElementById('container');
  users.forEach(item => {
    const card = buildCardInfo(item);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  CriarCartoes(users)
  const ds = new DataShow('droptarget');
  const db = new DataBox(ds, document.querySelectorAll('#container .box'));
});
