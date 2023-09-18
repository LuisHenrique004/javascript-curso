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
