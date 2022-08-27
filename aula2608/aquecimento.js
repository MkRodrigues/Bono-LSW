console.log("teste");

//Loopings
//for 
// for(var i = 0 ; i <= 10; i++){
//     console.log("Número da linha: " + i);
//     }

//While
// var i = 0; 
// while( i < 10){
//     i ++; 
//     console.log("Número da linha: " + i ); 
// }

// DO/ WHILE
// var i = 0; 
// do{
//     i++;
//     console.log("Número da linha: " + i); 

// }while(i < 10);


let a = window.prompt("Digite um número A: ");
let b = window.prompt("Digite um número B: ");
// let a = 10; 
// let b = 20; 
if (a > b ) {
    console.log("A é maior que B"); 
}else{
    console.log("B é maior que A"); 
}

let diaSemana = 0; 

switch(diaSemana){
    
    case 0:  
    console.log("Domingo");
    break;

    case 1:
        console.log("Segunda-feira"); 
        break;
    case 2 : 
        console.log("Terça-feira");
        break;
    
    case 3 : 
        console.log("Quarta-feira");
        break;

    case 4 : 
        console.log("Quinta-feira");
        break;

    case 5 : 
        console.log("Sexta-feira");
        break;

    case 6 : 
        console.log("Sábado");
        break;

    default: 
        console.log("Número inválido");

}