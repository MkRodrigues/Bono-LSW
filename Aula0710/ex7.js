// Como apagar elementos
const itens = document.querySelectorAll("li");

// itens[1].remove();
// itens[2].remove();

const item = document.querySelector("ul");
console.log(item);

item.firstElementChild.firstElementChild.remove();
