import {render} from "./utils.js";

const List = (data) => {
    const contents = data
    .map(item=>`<li> ${item.title} - ${item.expires} </li>` )
    .join("");

    const container = document.querySelector("#container");
    render(container, `${contents}`);
};
export{List};