// aula 037 - operadores de comparação

/*
operadores de comparação - JavaScript

<    menor que 
<=   menor ou igual a 
>    maior que
>=   maior ou igual a 


==   igualdade ( não se utiliza mais !! )
===  igualdade estrita (checa valor e tipo)

!=   diferença ( não se utiliza mais !! )
!==  diferença estrito (checa valor e tipo)

*/

// forma de utilizar a expressão

// no caso de qualquer expressão ele vai retornar um valor boleano true ou false


console.log(10 > 9); // true 


// const num1 = 10;
// const num2 = 10;
// const comp = num1 === num2; 
// console.log(comp); // true

const num1 = 10;
const num2 = '10';
const comp = num1 !== num2;
console.log(comp); // true