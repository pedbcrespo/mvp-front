import TableList from "./componentes/tableList.js";

const app = document.getElementById("app");

function render(page) {
    app.innerHTML = "";
    app.appendChild(page());
};