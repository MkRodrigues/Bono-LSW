let servico = prompt("Entre com o servicoiço: \n0 - Troca de óleo \n1 - Balanceamento \n2 Cambagem");
let prazo = prompt("Entre com o prazo: \n0 - Um dia \n1 - Dois dias \n2 Três dias");
let tabela = [['$$$','$$', '$' ], ['$$$','$$', '$' ], ['Configuração impossível de ser realizada','Configuração impossível de ser realizada', '$$$' ]];

if(validaEntrada(servico) && validaEntrada(prazo)) {
    alert("O serviço ficará em: " + tabela[servico][prazo]); 

}else {
    alert("Verifique os valores inseridos e tente novamente!");
}

function validaEntrada(dadoUsuario){   
    
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false; 
}