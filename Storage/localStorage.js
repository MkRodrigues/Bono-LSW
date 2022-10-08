// localStorage.setItem("nome", "Mikael");
// localStorage.setItem("sobrenome", "Assis");

// Pegar elementos
let btn = document.getElementById("botao");
btn.addEventListener("click", mostrar);

function mostrar(evento) {
	evento.preventDefault();

	// Pegas os valores dos campos
	let entrada = document.getElementById("entrada");
	let mostrar = document.getElementById("mostrar");
	let valor = entrada.value;
	mostrar.innerText = valor;
	entrada.value = "";

	// Guarda o valor em LocalStorage
	localStorage.setItem("dadoDoUsuario", valor);
}

// Recupera os dados de Local Storage e insere em Span usando get.item
document.querySelector("#mostrar").innerText =
	localStorage.getItem("dadoDoUsuario");

// Remove item do localStorage
localStorage.removeItem("dadoDoUsuario");
