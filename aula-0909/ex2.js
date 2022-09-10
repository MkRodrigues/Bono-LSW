let prazo = document.getElementById("prazo");
let servico = document.getElementById("servico");
let btnCalcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e);
});

    // return  dadosUsuario >= 0 && dadosUsuario <= 2 ? true : false;

// let tabela = [['$$$','$$', '$' ], ['$$$','$$', '$' ], ['Configuração impossível de ser realizada','Configuração impossível de ser realizada', '$$$' ]];

if(validarDados(servico) && validarDados(prazo)){

}else {
    
}

// function validarDados(dadosUsuario){ 
//     return  dadosUsuario >= 0 && dadosUsuario <= 2 ? true : false;
// }
