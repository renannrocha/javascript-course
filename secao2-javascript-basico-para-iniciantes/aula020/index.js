// -> AULA 20 - OPERADORES ARITMÉTICOS, DE ATRIBUIÇÃO E INCREMENTO

/*
    operadores simples : 

    ( + ) adição / concatenação 
    ( - ) subtração
    ( / ) divisão
    ( * ) multiplicação 
    ( ** ) potenciação
    ( % ) resto da divisão

*/

//##########################################################################################################################################


//    - adição (exemplos)

const exemplosoma1 = 5;
const exemplosoma2 = 10;

console.log(exemplosoma1 + exemplosoma2); 15
// no caso ele fara uma soma simples utilizando os valores das variaveis

//    - concatenação (exemplos)

const exvalor1 = '10';
const exvalor2 = 4;

console.log(exvalor1 + exvalor2); // 104
// neste caso como umas das variaveis e uma string ele fara a concatenação

//##########################################################################################################################################


//   -  subtração (exemplos)

const exemplosub1 = 5;
const exemplosub2 = 10;

console.log(exemplosub1 - exemplosub2); // -5 
// neste caso ele fara a subtração dos valores da variaveis

//##########################################################################################################################################


//   - divisão (exemplos)

const exemplodiv1 = 5;
const exemplodiv2 = 10;

console.log(exemplodiv1 / exemplodiv2); // 0.5

// neste caso ele fez a divisão dos valores da variavel

//##########################################################################################################################################

//   - multiplicação (exemplos)

const exemplomult1 = 5;
const exemplomult2 = 10;

console.log(exemplomult1 * exemplomult2); // 50
// neste caso ele fez a multiplicação dos valores das variaveis 

//##########################################################################################################################################

//   -  potenciação (exemplos)

const exp1 = 5;
const exp2 = 10;

console.log(exp1**exp2); // 9765625
// neste caso ele fez a exponeciação , fazendo o calculo da variavel pelo sua potencia

//##########################################################################################################################################

//   - resto da divisão (exemplos)

const restexe1 = 5;
const restexe2 = 10;

console.log(restexe1 % restexe2); // 5
// neste tipo de situação , o resto da divisão e o valor que e fora da parte inteira da divisão

//##########################################################################################################################################

// ordem de precedencia -  JavaScript

/*
    1°  -  ()     | =  tudo que esta entre parenteses
    2°  -  **     | =  potenciações
    3°  -  * / %  | =  multiplicações, divisões e resto da divisão
    4°  -  + -    | = soma e subtração
*/

//##########################################################################################################################################


// INCREMENTO

// pos incrento

// exemplo contador 
let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
contador++; //6
contador++; //7
console.log(contador); //7

// o operador de encremento de variavel ( ++ ) 
// obs.: não pode ser utilizado em uma const 
// neste caso quando utilizamos o valor de incremento em uma variavel , ele adiciona um valor a variavel


// pre incrementação 

let contador2 = 10;
++contador2;
console.log(contador2); // 11

// -----------------------------------------------------------------------------------------------------------------

// DECREMENTO

// operador de decremento de uma variavel ( -- )

// pos incremento
let contador3 = 10;
contador3--;
console.log(contador3);

// pre incremento

let contador4 = 30
--contador4;
console.log(contador4);


// OBSERVAÇÃO : fazer a operação de incremento ou decremento antes de qualquer console.log ou de qualquer função para evitar bugs !!

//##########################################################################################################################################