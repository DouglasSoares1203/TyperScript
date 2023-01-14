// string
let nome = "Doug";
console.log(nome);

//numbers
let idade = 32;
idade = 27.5;
console.log(idade);

//boolean
let possuiHobbies = false;
console.log(possuiHobbies);

//tipo explicitos

let minhdaIdade;
minhdaIdade = 27;
console.log(typeof minhdaIdade);
minhdaIdade = "idade é 27";
console.log(typeof minhdaIdade);

//array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua importante", 1260, "Bloco D"];
console.log(endereco);

//Enums

enum Cor {
  Cinza, //0
  Verde = 100, //100
  Azul = 10, //101
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Cinza);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo, Cor.Vermelho);

//any

let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2023 };
console.log(carro);
