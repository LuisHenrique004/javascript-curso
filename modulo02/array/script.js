/*

let colors = ["blue", "red", "green", "orange", "White"];

let idade = [10, 20 ,30];

let lista = ["Algo", 30, "Luis", true, idade]


//Operações basicas com Arrays
let ingredientes = ["água", "farinha", "ovo", "corante", "sal"];

//Função para adicionar elementos a lista
ingredientes.push("cebola") 

//Função para remover o ultimo item da lista
ingredientes.pop()

//Função para remover o primeiro item da lista
ingredientes.shift()

console.log(ingredientes);

//função para ler a quantidade de itens na lista
console.log(`Total de ingrediente: ${ingredientes.length}`) 

let frutas = ['Maçã', 'Uva', 'Laranja', 'Banana'];


//Gera uma string com o separado que você escolhe
console.log(frutas.join(', '));

//Ordena a lista do menor para o maior e em ordem alfabetica
frutas.sort();

//Reverte a lista
frutas.reverse();

console.log(frutas);

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

cars.sort((a, b) => {
    return a.year - b.year;
});

console.log(cars);

*/

let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra', 'Uva'];

//Filtra a lista de fruta e retorna as frutas com mais de 4 letras
let bigFruits = fruits.filter((item) => item.length > 4);

//Every só retorna true quando todos os item do array sasistefazem a sua condição
let ok = fruits.every((value) => {
    return value.length > 3;
});

/*
//Some - se algum item da lista satisfazer a condição dele ele já retorna true
let no = fruits.some((value) => {
    return value.length > 3;
});
*/

if(ok) {
    console.log('Todos são maior que 3');
} else {
    console.log("Não são todos maior que 3");
}


//Includes - Verifica se existe algum item especifico na lista
if (fruits.includes('Uva')) {
    console.log("tem uva sim!");
} else {
    console.log("Não tem uva!");
}