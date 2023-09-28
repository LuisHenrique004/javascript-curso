/*

let carro = "Ferrari";
console.log(carro);

let preco = 19.99;
console.log("R$ " + preco);

let cidade = "São Paulo";
console.log(cidade);


let x = 10;
let y = 5;
console.log(x > y);

let w = "10";
let z = 10;
console.log(w === z); 

let a = 10;
let b = 5;
console.log(a != b);

let preco_carne = 45.3;

if (preco_carne <= 45.00) {
    console.log(`O valor da carne por ${preco_carne} está muito barato`);
} else {
    console.log(`A carne a ${preco_carne} está muito cara!`);
}

*/

function calcPct(x, y) {
    return ((y / x) * 100);
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);