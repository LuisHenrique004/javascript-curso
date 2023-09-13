let carros = ['palio', 'uno', 'corolla', 'ferrari'];

let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function() {
        console.log("Vrum, Vrum!");
    },
    acelerar: function() {
        console.log("ririririririri");
    }
};

console.log(carro.nome);
carro.ligar();
carro.acelerar();