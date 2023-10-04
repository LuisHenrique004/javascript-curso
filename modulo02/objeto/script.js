/*

let carros = ['palio', 'uno', 'corolla', 'ferrari'];

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function() {
        this.ligado = true;
        console.log("Vrum, Vrum!");
    },
    acelerar: function() {
        if (this.ligado == true) {
            console.log("ririririririri");
        } else {
            console.log(this.nome + " " + this.modelo + " " + "Não está ligado!");
        }
       
    }
};

console.log(carro.nome);
carro.ligar();
carro.acelerar();

let carrinhos = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Ferrari', modelo: 'Spider'},
];

console.log(carrinhos[2].modelo);
console.log(carrinhos[3].modelo);


let personagem = {
    nome: "Luis",
    idade: 90,
    pais: "Brasil",
    olhos: ["preto", "azul"],
    caracteristicas: {forca: 20, magia: 5, estamina: 15}
}


personagem.caracteristicas.forca += 5;

console.log(personagem.nome);
console.log(`Força: ${personagem.caracteristicas.forca}`);

personagem.olhos.push('verde');

console.log(personagem.olhos)

*/

let personagem = {
    nome: "Bonieky",
    sobrenome: "Levi",
    idade: 90,
    carros: [
        {modelo: 'Fiat', cor: 'Preto'},
        {modelo: 'Ferrari', cor: 'Vermelho'}
    ],
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(personagem.nomeCompleto());
