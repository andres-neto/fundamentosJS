// variável do tipo null
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// null vs undefined
input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

// comparação entre null e undefined
console.log(null == undefined); // true (mesmo valor)
console.log(null === undefined); // false (tipos diferentes)

// No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” 
// (causada por um bug ou erro no código) e null como um tipo de dado que também 
// significa ausência de valor, mas não de maneira inesperada.