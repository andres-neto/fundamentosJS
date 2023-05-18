//var
//pode ser usada em qualquer parte do código
//atribuída antes e declarada depois

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

//let
//limitada a um certo bloco de código
//evita usos indevidos ou bugs por nomes de variáveis

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

//const
//valor fixo sempre
//precisa ser inicializado na declaração

const forma = 'quadrado'
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)