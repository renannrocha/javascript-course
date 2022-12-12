// A B C 

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
    guardando um dos valores da variavel A ela não se perde assim dando o resultado correto
let vartemp = varA;

varA = varB;
varB = varC;
varC = vartemp;
*/

// forma mais atual
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);