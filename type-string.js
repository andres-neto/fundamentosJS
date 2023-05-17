const texto1 = "Olá, mundo";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "345670";


// citacao = "O Leo disse 'oi!'";
// console.log(citacao)
// citacao = 'O Leo disse "oi!"';
// console.log(citacao)


// concatenação (+)
// citacao = "Meu nome é ";
// const meuNome = "Leonardo";

// console.log(citacao + meuNome)

// codificação
// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'

// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)

//comparação strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//contagem caracteres
const senhaNova = "minhaSenha123"
console.log(senhaNova.length) // 13 caracteres


// PESQUISAR template string OU template literal
//PESQUISAR diferença entre métodos e propriedades