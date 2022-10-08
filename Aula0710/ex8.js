const cartao = document.querySelector(".card");
const titulo = document.querySelector("h5");

cartao.addEventListener("mousemove", executaAcao);

function executaAcao(e) {
	console.log(e);
	titulo.textContent = `Eixo X:${e.offsetX}, Eixo Y:${e.offsetY} `;

	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
