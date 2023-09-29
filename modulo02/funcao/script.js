// O que é uma função?

/*

function gravidade() {
    console.log(`A gravidade do planeta é:`);
    console.log(9.8);
}

gravidade();

function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log(`Resultado: ${resultado}`);
}

somar(10, 15);

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Luis Henrique", "Santos Pereira")
console.log(completo);

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let verificacao = maiorDeIdade(15);
console.log(verificacao);

if(verificacao) {
    console.log("é maior de idade");
} else {
    console.log("é menor de idade");
}

//Quando uma variavel dentro de uma função tem o mesmo nome que uma variavel global, a variavel "local" (dentro da função) tem mais "poder" que a variavel global.
let count = 0;

function add() {
    let count = 0;
    count += 10;
}

add();
add();

console.log(count);

*/


//Função dentro de uma função
function addSquares(a, b) {
    
    const square = x => x * x;
      
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2,4))