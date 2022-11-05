document.querySelector("button").addEventListener("click", recuperaDados);

function recuperaDados(evento) {
	evento.preventDefault();

	// Nome do usuário
	let nome = document.getElementById("nome").value;

	// Fazemos a chamada ao endereço
	fetch(`https://api.agify.io/?name=${nome}`)
		.then(function (retorno) {
			// Retorno da chamada efetuada (conteudo do retorno)
			return retorno.text();
		})

		// Então
		.then(function (conteudo) {
			// Trabalhamos com o conteúdo retornado
			let dados = JSON.parse(conteudo);

			let saida = `${dados.name} tem ${dados.age} anos`;
			document.getElementById("nome").value = "";
			document.querySelector("#dadorecuperado").innerHTML = saida;
		});
}
