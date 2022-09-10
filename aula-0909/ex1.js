// alert(`Sua resolução é: ${window.innerHeight} x ${window.innerWidth}`);


let p = document.getElementById('olamundo');
let h1 = document.getElementById('titulo'); 


// if(confirm("Deixe uma mensagem: ")){
//     let msg = prompt("Mensagem");
//     h1.innerText = msg;
//     h1.style.color = "blue";
    
// }else {
//     h1.innerText = "Sem mensagem";
//     h1.style.color = "#dedede";
// }

let navegador = window.navigator.userAgent; 
// let navegador = window.navigator.vendor; 

p.innerHTML = `Você está usando o navegador ${navegador}`; 




