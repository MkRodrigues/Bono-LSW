document.querySelector("#btnIPCA").addEventListener("click", mostrarIPCA);
let ipca = document.querySelector("#ipca");

function mostrarIPCA(evento) {
	evento.preventDefault();
	ipca.style.display = "block";

	document.querySelector("#graficoLinha").innerHTML = "";	

	fetch(
		"https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101"
	)
		.then(function (retorno) {
			return retorno.text();
		})
		.then(function (cont) {
			let conteudo = JSON.parse(cont);
			let novobj = [];
			let anoUser = document.querySelector("#input").value;

			conteudo.forEach(function (mes) {
				anoStr = mes.data.substring(6, 10);
				mesStr = mes.data.substring(3, 5);
				anoMesStr = anoStr + "-" + mesStr;

				if (parseInt(anoStr) != anoUser && anoUser != "") {
					return;
				}
				indice = parseFloat(mes.valor);
				novobj.push({ month: anoMesStr, value: indice });
			});

			if (novobj.length == 0) {
				alert(`Não há dados para o ano ${anoUser}`);
			}

			JSONMorris = {
				element: "graficoLinha",

				data: novobj,
				xkey: "month",
				ykeys: ["value"],
				labels: ["IPCA"],
			};
			new Morris.Line(JSONMorris);
		});
}
