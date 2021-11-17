import { API } from "../js/utils.js";
import { List } from "./list.js";
import { Add } from "./add.js";
import { View } from "./view.js";
import { Edit } from "./edit.js";

const loadList = () =>
  fetch(API)
    .then((response) => {
      if (response.status === 404) {
        console.error("errore!");
        document.querySelector(".alert").classList.add("show");
      }
      else {
        return response.json();
      }
    })

    .then((data) => List(data));

document.addEventListener("DOMContentLoaded", loadList);


const getId = () => parseInt(location.hash.split("_")[1]);

window.addEventListener("hashchange", () => {
  // console.log("hash has changed", location.hash);
  const destination = location.hash.split('_')[0];

  switch (destination) {

    case "#add":
      Add();
      break;

    case "#view":
      View(getId());
      break;

    case "#edit":
      Edit(getId());
      break;

    case "":
      loadList();
      break;
  }
});