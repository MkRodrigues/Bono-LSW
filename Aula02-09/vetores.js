// Iteração de vetor
let amigos = ['Mikael', 'Gabrielly', 'Laura', 'Adriano']

for (let i = 0; i < amigos.length; i ++) {
// console.log(amigos[i]);
console.log(`Amigo: ${amigos[i]}`);
console.log(amigos[3]);
}

// ForEach
amigos.forEach(function (valor, indice){
    console.log(valor);
});

function trataDados(valor, indice) {
    console.log(valor);
}

// MAP
amigos.map(function(val){
console.log(val);
});