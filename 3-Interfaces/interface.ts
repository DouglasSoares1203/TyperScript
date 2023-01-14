interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComola(pessoa: Humano) {
  console.log("olá," + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  },
};

saudarComola(pessoa);
mudarNome(pessoa);
saudarComola(pessoa);
// saudarComola({ nome: "Jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Skywalker");

// Usando Classes...

class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComola(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  //Math.pow(3,10)
  //3 ** 10
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
