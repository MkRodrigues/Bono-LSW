document.querySelector("button").addEventListener("click", recuperaDados);

function recuperaDados(evento) {
	evento.preventDefault();
	// Fazemos a chamada ao endereço
	fetch("http://127.0.0.1:5500/ajax/conteudo.txt")
		.then(function (retorno) {
			// Retorno da chamada efetuada (conteudo do retorno)
			console.log(retorno);
			return retorno.text();
		})

		// Então
		.then(function (conteudo) {
			// Trabalhamos com o conteúdo retornado

			let dados = JSON.parse(conteudo);
			let saida = "";
			dados.forEach(function (aluno) {
				saida +=
					aluno.idade >= 18
						? `${aluno.nome} é maior de idade <br>`
						: `${aluno.nome} é menor de idade <br>`;
			});
			document.querySelector("#dadorecuperado").innerHTML = saida;
		});
}
