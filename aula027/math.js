// aula 27  Objeto Math

// biblioteca de calculos matematicos 

let numexemplo1 = 9.518866;

// faz o arredondamento do numero para baixo 
// let num2 = Math.floor(numexemplo1);


// faz o arredondamento para cima
// let num2 = Math.ceil(numexemplo1);


let num2 = Math.round(numexemplo1); // faz o arrendondamento


console.log(Math.max(1,2,5,3,5,)); // demostra qual o maior valor

console.log(Math.min(34,50,-45435,1000,4234)); // demastra o menor valor


const aleatorio = Math.round(Math.random() * (10 - 5) + 5 );

// Math.random()  retorna um valor entre 0 e 1 mas o 1 numca e demostrado 

//------------------------------------------------------------------------

// em javascript e possivel realizar a divisão por 0 


console.log( 100 / 0 ); //retorna o valor infinity