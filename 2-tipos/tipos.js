"use strict";
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
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 1260, "Bloco D"];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Cinza);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo, Cor.Vermelho);
//any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2023 };
console.log(carro);
