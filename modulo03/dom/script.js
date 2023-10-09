function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");
    
    
    //outerHTML pega o conteudo de fora das tag
    console.log(ul.outerHTML);
    ul.outerHTML = "<strong>123</strong>"
}
