// AULA 26 - mais sobre numbers


// tranformar um number em string 

let num1 = 13;
let num2 = 500;
let num3 = 23.345565656756756765;


console.log(num1.toString() + num2); //13500
// no caso a variavel não é alterado para o tipo string.

//num1 = num1.toString();  nesse caso foi feita a alteração do tipo da variavel 


// formatando para representação binaria com toString()

console.log(num2.toString(2)); // 111110100

//-------------------------------------------------------------------------------------------------------------------------------------
// arredendando numeros com toFixed()

console.log(num3.toFixed(2))

/*
com to fixed vc pode fazer o arrendondamento de um numero muito extenso
apenas determinando quantas casas decimais dentro de parenteses
*/

//-------------------------------------------------------------------------------------------------------------------------------------


// avaliar o tipo de um valor de uma variavel 

/*
    em exemplos onde recebemos valores atraves de uma base de dados 
    ou de uma conta matematica , 
*/


console.log(Number.isInteger(num1));
// determina se um numero e inteiro ou não , retornando um vaor booleano true ou false


// avaliar se uma conta ela é invalida

let temp = 'oi' * 4;
console.log(Number.isNaN(temp));

// determina se o valor da variavel é um calculo invalida , retornando valores booleanos true ou false.


//-------------------------------------------------------------------------------------------------------------------------------------


// imprecisão

/*
as contas em JavaScript seguem um padrão IEEE 754-2008, ou seja esse é o pradrão que o 
JavaScript segue para fazer os calculos dentro do seu motor paa ter a precisão com numeros
com casas decimais
*/

let num4 = 0.7;
let num5 = 0.1;

/*
sabemos que o resultado da soma entre esses dois valores das variaveis resultaria em 0.8 , mas 
acontece um errro :

console.log(num1 + num2);   // 0.799999999999999999999999

no caso e percebido que ha uma certa inprecisão no resultado , não que seja algo que seja muito
distante o resultado 
*/

// agora se o valor que queremos que seja demostrado seja o 1.0.

// num4 = num4 + num5
num4 += num5; // 0.8 
num4 += num5; // 0.9
num4 += num5; // 1.0

/* 
fazendo isso teremos o resultado de 0.9999999999999999999999 , ou seja ainda consiste a mesma inprecisão,
poderiamos resolver esse problema com o to fixed , mas ele não resolve o problema de fato , a função que 
pode ser utilizada junto com to fixed para resolver esse problema e o Number: 
*/

num4 = Number(num4.toFixed(2));
console.log(num4) // 1


/*
resolvendo esse problema de imprecisão com calculos 
*/


// num4 = ((num4 * 100) + (num5 * 100)) / 100; // 0.8
// num4 = ((num4 * 100) + (num5 * 100)) / 100; // 0.9
// num4 = ((num4 * 100) + (num5 * 100)) / 100; // 1.0