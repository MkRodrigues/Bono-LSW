const novoTitulo = document.createElement("h2");
novoTitulo.id = "task.title";
novoTitulo.appendChild(document.createTextNode("Nova Lista"));

const tituloAtual = document.getElementById("task-title");

let divMaeTitulo = document.getElementsByClassName("card-action");

divMaeTitulo[0].replaceChild(novoTitulo, tituloAtual);
