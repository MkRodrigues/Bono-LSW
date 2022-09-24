// Como criar novos elementos
let li = document.createElement('li');
li.className = "collection-item";
li.id = "novo-item";
li.setAttribute('title', 'Novo Item na lista');
li.setAttribute('name', 'campoLi');
li.appendChild(document.createTextNode('Fazer Exercício Físico'));

// Cria elemento de Link 'A' e 'I'
let a = document.createElement('a');
let i = document.createElement('i');
a.className = "delete-item secondary-content";
a.setAttribute('href', '#');
i.className = "fa fa-remove";
a.appendChild(i);
li.appendChild(a);
ul = document.querySelector('ul.collection');
ul.appendChild(li);

console.log(li);
