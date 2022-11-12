document.querySelector("#btnIPCA").addEventListener("click", mostrarIPCA);

function mostrarIPCA(evento) {
	evento.preventDefault();

	fetch(
		"https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101"
	)
		.then(function (retorno) {
			return retorno.text();
		})
		.then(function (conteudo) {
			let grafico = JSON.parse(conteudo);

			JSONMorris = {
				element: "ipca",

				data: [
					{ year: "2008", value: 20 },
					{ year: "2009", value: 10 },
					{ year: "2010", value: 5 },
					{ year: "2011", value: 5 },
					{ year: "2012", value: 20 },
				],

				// O nome do eixo com valores de X
				xkey: "year",

				// A lista de nome dos atributos do dados contidos em Y
				ykeys: ["value"],

				//Rótuo para os índices - Aparece quando passa o mouse por cima
				labels: ["Value"],
			};
			new Morris.Line(JSONMorris);

			// let saida = grafico;
			// document.querySelector(".ipca").innerHTML = saida;
		});
}
