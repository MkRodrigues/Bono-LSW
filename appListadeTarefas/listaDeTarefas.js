let entradaTarefa = document.querySelector("#tarefa");
let btnAddTarefa = document.querySelector(".btn");
let lista = document.querySelector(".collection");
let btnLimpar = document.querySelector(".limpar-tarefas");
let filtro = document.querySelector("#filtro");

function carregaMonitoresEventos() {
	btnAddTarefa.addEventListener("click", adicionarTarefa);
	btnLimpar.addEventListener("click", removeTudo);
	filtro.addEventListener("keyup", filtrarLista);

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
	} else {
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

		// Insere a tarefa no Local Storage
		gravarTarefa(entradaTarefa.value);

		// Limpa o campo de entrada
		entradaTarefa.value = "";
	}
}

function removeTudo(evento) {
	evento.preventDefault();

	lista.remove();
}

// Pegar caracter por carcter
function filtrarLista(evento) {
	const procurado = evento.target.value.toLowerCase();
	const liItem = document.querySelectorAll(".collection-item");

	liItem.forEach(function (tarefa) {
		let textoTarefa = tarefa.innerText;

		if (textoTarefa.toLowerCase().indexOf(procurado) != -1) {
			tarefa.style.display = "block";
		} else {
			tarefa.style.display = "none";
		}
	});
}

function gravarTarefa(tarefa) {
	let tarefas = [];
	let tarefaLStorage = localStorage.getItem("tarefas");

	if (tarefaLStorage != null) {
		tarefas = JSON.parse(tarefaLStorage);
	}

	tarefas.push(tarefa);
	localStorage.setItem("tarefas", JSON.stringify(tarefas));
	lista = localStorage.getItem("tarefas");

	// lista.innerText = localStorage.getItem("tarefa");
}
