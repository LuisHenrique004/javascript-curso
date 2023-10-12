function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");
    
/*

//outerHTML pega o conteudo de fora das tag
console.log(ul.outerHTML);
ul.outerHTML = "<strong>123</strong>"

//adiciona mais conteudo ao elemento, não muda o endereço de memoria
ul.children[0].append("(alterado)");


//essa forma é melhor em termos de processamento, por que não recria o elemento na memoria.
let newLi = document.createElement("li");
newLi.innerText = "Item adicionado";

ul.append(newLi);

let newLi = document.createElement("li");
newLi.innerText = "Item adicionado";
//adiciona no começo!
ul.prepend(newLi);

const newButton = document.createElement('button');
newButton.innerHTML = "Botão";

*/

let newUl = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add " + i;
    newUl.append(newLi);
}

ul.before(newUl);

}
