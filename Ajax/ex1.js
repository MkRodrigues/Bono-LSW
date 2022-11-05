document
	.querySelector("button")
	.addEventListener("click", recuperaConteudoAjax);

function recuperaConteudoAjax() {
	const XHR = new XMLHttpRequest();
	XHR.open("GET", "http://127.0.0.1:5500/Ajax/conteudo.txt", true);

	XHR.onload = function () {
		if (this.status == 200) {
			// document.querySelector("#dadorecuperado").innerHTML =

			// Verifica s string JSON e transforma e objeto
			let dados = JSON.parse(this.responseText);
			let saida = "";

			dados.forEach(function (aluno) {
				saida +=
					aluno.idade >= 18
						? `${aluno.nome} é maior de idade <br>`
						: `${aluno.nome} é menor de idade <br>`;

				document.querySelector("#dadorecuperado").textContent = saida;
				// }
			});
		}
	};

	XHR.send();
}
