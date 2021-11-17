import { render, API } from "./utils.js";

const Add = () => {
  const container = document.querySelector("#container");
  const today = new Date();

  render(
    container,
    `<div>
    <h3>Aggiungi una nuova scheda</h3>
    <form id="create">
    <div class="rowSx">
      <div class="row">
        <label for="title">Titolo:</label>
        <input type="text" id="title" name="title" />
      </div>
      <div class="row">
        <label for="poster">Poster:</label>
        <input type="text" id="poster" name="poster" />
      </div>
      <div class="row">
        <label for="year">Anno:</label>
        <input type="number" min="1900" value="${today.getFullYear()}" id="year" name="year" />
      </div>
      </div>
      <div class="row2">
        <label for="description">Descrizione:</label>
        <textarea id="description" name="description"></textarea>
      </div>
      <div class="btn">
      <button class="save">Salva scheda</button>
      <button href="#" id="back">Torna alla home</button>
      </div>
      </form>
    
  </div>`
  );

  const form = document.querySelector("#create");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const movie = {
      title: event.target.title.value,
      poster: event.target.poster.value,
      year: parseInt(event.target.year.value),
      description: event.target.description.value,
    };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then(() => (location.hash = ""));
  });
};

export { Add };