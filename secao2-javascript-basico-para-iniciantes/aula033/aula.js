// aula 33 - Valores primitivos e valores por referencia

/* os tipos presentes que fazem parte dos valores primitivos
são ( string , number, boolean, undefined, null ( bigint , symbol ))
no caso são valores copiados*/

/* os tipos presentes que fazem parte dos valores por referencia
são os array , function, object  - passados por referencia*/


/*a principal diferença entre os valores primitivos e os 
valores por referencia e que com os valores primitivos , 
quando eu faço uma ligação com eles com o sinal de igual
eu estou apenas copiando o valor de outro local 

exemplo*/

let a = "Renan";
let b = a; 

/* dessa forma quando eu trabalho com valores primitivos 
faz\er a atribuição com o sinal de = so faz copiar o valor
da outra variavel , no caso do exemplo o valor de ( a ) é 
totalmente independente do valor de ( b ) */


/* 
ja no caso dos valores por referncia se eu faço a ligação 
deles atravez da atribuição do sinal de igual , eles vão passar
a apontar para o mesmo local da memoria , ai por acaso algum valor 
de uma variavel for mudado , a outra variavel que foi feita a ligação 
tambem tera o valor alterado 

veja o exemplo: */

const pessoa = {
    nome: 'Marcio',
    sobrenome : 'Renan'
};

const mesmaPessoa = pessoa; 
// agora tanto pessoa quanto mesmaPessoa apontam para o mesmo local na memoria 

console.log(pessoa, mesmaPessoa);
// { nome: 'Marcio', sobrenome: 'Renan' } { nome: 'Marcio', sobrenome: 'Renan' }

//  agora se for modificado um , o outro também sofre alteração

mesmaPessoa.sobrenome = 'Silva';

console.log(pessoa, mesmaPessoa);
// { nome: 'Marcio', sobrenome: 'Silva' } { nome: 'Marcio', sobrenome: 'Silva' }

//----------------------------------------------------------------------------------

/* no caso dos valores passados por referencia se eu quero apenas copiar o valor
referenciado a uma variavel , mais não ser referenciado para o mesmo local da memoria 
ou seja, ficar de forma idependente 

fica assim: */

const referenciaPessoa = {...pessoa}; 
// nesse caso so ouve copia dos valores de pessoa
