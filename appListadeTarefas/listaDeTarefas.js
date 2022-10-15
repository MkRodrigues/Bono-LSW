let entradaTarefa = document.querySelector("#tarefa");
let btnAddTarefa = document.querySelector(".btn");
let lista = document.querySelector(".collection");
let btnLimpar = document.querySelector(".limpar-tarefas");
let filtro = document.querySelector("#filtro");

function carregaMonitoresEventos() {
	btnAddTarefa.addEventListener("click", adicionarTarefa);

	// Evento para fazer o x funcionar
	lista.addEventListener("click", apagarTarefa);
}

function apagarTarefa(evento) {
	// Se o elemento pai tiver a classe apaga-tarefa, ou seja se for o elemento a ele apaga o li, no caso a tarefa

	// Pega o alvo pai
	if (evento.target.parentElement.classList.contains("apaga-tarefa")) {
		evento.target.parentElement.parentElement.remove();
	}
}

carregaMonitoresEventos();

function adicionarTarefa(evento) {
	evento.preventDefault();

	if (entradaTarefa.value === "") {
		alert("Entre com uma tarefa");
	}

	// Cria novo Li com a nova tarefa
	const li = document.createElement("li");
	li.className = "collection-item";
	li.appendChild(document.createTextNode(entradaTarefa.value));

	// Cria o X que fecha a tarefa
	const a = document.createElement("a");
	a.className = "apaga-tarefa secondary-content";

	const i = document.createElement("i");
	i.className = "fa fa-remove";

	a.appendChild(i);
	li.appendChild(a);
	lista.appendChild(li);

	// Limpa o campo de entrada
	entradaTarefa.value = "";
}
