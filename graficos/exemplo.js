new Morris.Line({
	// Id do elemento onde o Gráfico vai aparecer
	element: "graficoLinha",

	resize: true,

	// Dados do GRáfico
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
});

new Morris.Bar({
	// Id do elemento onde o Gráfico vai aparecer
	element: "graficoBarra",

	// Dados do GRáfico
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
});

new Morris.Donut({
	// Id do elemento onde o Gráfico vai aparecer
	element: "graficoDonut",

	// Dados do GRáfico
	data: [
		{ label: "Aluguéis", value: 20 },
		{ label: "Veículos", value: 10 },
		{ label: "Compras", value: 5 },
	],

	// O nome do eixo com valores de X
	xkey: "year",

	// A lista de nome dos atributos do dados contidos em Y
	ykeys: ["value"],

	//Rótuo para os índices - Aparece quando passa o mouse por cima
	labels: ["Value"],
});

new Morris.Area({
	// Id do elemento onde o Gráfico vai aparecer
	element: "graficoArea",

	// Dados do GRáfico
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
});
