import {render, API} from "./utils.js";

const Add = () =>{
 const container = document.querySelector("#container");

 render(
     container,
     `<form id="addList">
     <label for="title">Titolo:</label>
     <input type="text" name="title" id="title">

     <label for="expires">data scadenza</lable>
     <input type="date" name="expires" id="expires">

     </form>`
 );
const form = document.querySelector("#addList");
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const element = {
        title: event.target.title.value,
        expires: event.target.expires.value
    };
    console.log(element);

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(element),
    });
});
};

export{Add};