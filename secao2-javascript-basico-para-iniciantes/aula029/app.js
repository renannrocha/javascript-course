// AULA 029 - Arrays 

/*
    podemos identificar o Arrays como uma lista
    ou uma serie de coisas ou objetos
*/

//--------------------------------------------------------------------------

// 1° sintaxe basica de array

// const alunos = ['João', 'Maria', 'Fernando'];

//--------------------------------------------------------------------------

/*

    2° uma boa pratica de progamação aconselha que vc 
    utilize um tipo primitivo dentro das arrays 

    exemplo , se a array tiver uma string , todas 
    tem que ser do mesmo tipo , o mesmo com numeros 
    etc..
*/

// const alunos = ['João', 'Maria', 'Fernando'];

//--------------------------------------------------------------------------

/*
    3° assim como as strings , os arrays támbem são 
    indexaddas mas , indexadas por elemento 

    veja nesse exemplo
    */

    // console.log(alunos);

    /*
    cada um desses indices tem sua numeração: 

    0       1           2
[ 'João', 'Maria', 'Fernando' ]
*/ 

//--------------------------------------------------------------------------

// 4° selecionando um indice de um array

 // console.log(alunos[2]); // Fernando]

//--------------------------------------------------------------------------

// 5° editar m valor de um indice da array 
const alunos = ['João', 'Maria', 'Fernando'];

alunos[2] = 'Renan';

//--------------------------------------------------------------------------
// saber quantos indices tem um array 

console.log(alunos.length);
//--------------------------------------------------------------------------

// 6° adicionar um valor a array 

alunos[alunos.length] = 'Jose'; // 1° forma

// com funções 

alunos.push('Gabriel'); // adiciona o valor no fim 

alunos.unshift('Natanael'); // adiciona o valor no inicio 

//--------------------------------------------------------------------------

// 7° removendo elementos do fim da array

// pop - vai retirar o ultimo elemento da array

// alunos.pop();

// podemos salvar o elemento removido dentro de uma variavel

// const alunosRemovidos = alunos.pop();

//--------------------------------------------------------------------------

// 8° removendo elementos do inicio da array 

// shift - vai retirar o primeiro elemento da array 

// alunos.shift();

//--------------------------------------------------------------------------

/*
    9° no caso da remoção de elemento do array com a função 
    pop os indices denttro do array vão ser modificados 
    para todos.

    para remover um elemento de um array sem que modifique
    seu indice siga essa sintaxe: 
*/
// delete alunos[2]; <1 empty item>
// vai deleter o indice 2 , mas vai ficar com um valor indefinido

//--------------------------------------------------------------------------

// 10° acessar um indice de uma array que não existe
console.log(alunos[50]); // undefined

//--------------------------------------------------------------------------

// 11° fatiamento de arrays 

console.log(alunos.slice(0, 3))

/*
a função slice funcioan da mesma forma como nas strings 
então podemos pegar tanto positivos quanto negativos , e
a sepração nas arrays são por virgula.
*/

//--------------------------------------------------------------------------

// 12° array é considerado um objeto 

// no exemplo em que definimos um tipo para um array : 

const valores = [1, 2, 3, 4];
console.log(typeof(valores));

// nesse caso e Java Script informara que ele sera um objeto

/* 
para saber se a variavel ou se um objeto que você 
estaja trabalhando é um array : 
*/

console.log( alunos instanceof Array); // true
// retornara true se for um array ou false se não for 