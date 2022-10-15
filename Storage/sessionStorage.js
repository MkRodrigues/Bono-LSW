// sessionStorage.setItem("nome", "Mikael");
// sessionStorage.setItem("sobrenome", "Assis");

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

	// Guarda o valor em sessionStorage
	sessionStorage.setItem("dadoDoUsuario", valor);
}

// Recupera os dados de Local Storage e insere em Span usando get.item
document.querySelector("#mostrar").innerText =
	sessionStorage.getItem("dadoDoUsuario");

// Remove item do sessionStorage
sessionStorage.removeItem("dadoDoUsuario");

let vetor = ["pera", "banana", "manga"];

// JSON.steingify converte vetores e objetos em String para que possamos salvar em Session Storage
sessionStorage.setItem("frutas", JSON.stringify(vetor));

// Para recuperar uma string JSON do localStorage ou sessionStorage e trasnformar um objeto ou vetor em novamente user JSON.parse()
let recuperaDado = JSON.parse(sessionStorage.getItem("frutas"));

recuperaDado[3] = "morango";
recuperaDado[4] = "abacaxi";

let stringrecupDados = JSON.stringify(recuperaDado);
sessionStorage.setItem("frutas", stringrecupDados))

