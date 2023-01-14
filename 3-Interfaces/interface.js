"use strict";
function saudarComola(pessoa) {
    console.log("olá," + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    },
};
saudarComola(pessoa);
mudarNome(pessoa);
saudarComola(pessoa);
// saudarComola({ nome: "Jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Skywalker");
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComola(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    //Math.pow(3,10)
    //3 ** 10
    return Array(exp)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
