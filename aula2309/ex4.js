let e;



e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(e){

e = document.getElementsByClassName('collection-item');


console.log(e[2].innerText);
//     val.getElementsByClassName.color = 'green';
//     console.log(val.innerText);

});

// vetor.forEach(function(val, id){
//     console.log(val.innerText);
//     console.log(id);
// });

// Somente Ímpares e pares(even/odd)
// e = document.querySelectorAll('li:nth-child(odd)');

// e.forEach(function(val){

//     val.style.background = "#dedede";
// });


// Sem usar função anônima
// e.forEach(fazAlgumaCoisa);

// function fazAlgumaCoisa(val){
//     console.log(val);
// }

// e = document.querySelector('ul.collection');
// console.log(e.firstChild);