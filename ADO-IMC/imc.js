let peso = prompt("Qual seu peso?");
let altura = prompt("Qual sua altura?");


let resultado = calcularIMC(peso, altura);

function calcularIMC(peso, altura){
    // IMC = PESO / (ALTURA)²

    let imc = peso / (altura^2);

    let retorno = '';
    if(imc > 40){
        retorno = "Acima do peso";

    }else if(imc >=18 && imc <= 25 ){
        retorno = "Peso ideal";

    }else {
        retorno = "Abaixo do peso";
    }

    return retorno;
}

console.log(resultado);