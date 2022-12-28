// -> AULA 19 - TIPOS PRIMITIVOS - JAVASCRIPT (string, number, undefined, null, boolean)


// STRINGS - texto 

/*
    strings em logica de progamação pode ser considerado como texto normal 
    sendo que , no JavaScript ele pode ser indicado de três formas : 

    com aspas simples , aspas duplas , ou com crase

    veja os exemplos abaixo: 
*/

const exemploString1 = 'Marcio'; // aspas simples
const exemploString2 = "Renan"; // aspas duplas
const exemploString3 = `Rocha`; // crase - com criação de template strings

/* 
    template strings :

    console.log(`criador dessa nota de estudo : ${exemploString1} ${exemploString2} ${exemploString3}`); 
*/ 

//##########################################################################################################################################

// NUMBER - numero

/*
    number com base em logica de progamação , eles seriam o que consideramos 
    os numeros, onde temos os numeros inteiros [1, 2, 3, ...], e os numeros de 
    ponto flutuante ou numeros reias [1.0, 2.0, 3.0, ...].

    Mas no caso do JavaScript , o tipo primitivo number ele engloba tanto os numeros 
    inteiros, quanto os numeros reias.

    Sobre proposito geral em criação de algoritimos com numeros assim também o number, 
    é que eles são utilizados para realização de calculos matematicos e afins.

    obs:(numeros negativos tanto inteiros , quanto reais tambem estão implementados).

    veja os exemplos abaixo:
*/

const exemploNumber1 = 35; // number ( inteiro )
const exemploNumber2 = 35.237427; // number ( real )
const exemploNumber3 = -35; // number (inteiro negativo )
const exemploNumber4 = -35.237427; // number ( real negativo )

// perceba que tdos são considerados como number.

//##########################################################################################################################################

// UNDEFINED - indefinido 

// veja o exemplo abaixo : 

let exemploUndef;
console.log(typeof exemploUndef); // >>> undefined

/*
    undefined pode ser descrito como valor nulo , no caso do exemplo acima 
    podemos ver que uma variavel foi criada mais nenhum valor foi atribuido 
    a ela , nesse caso o JavaScript entende que essa variavel tem um valor 
    indefinido por isso recebe o tipo de undefined, ou seja , 

        não aponta para lugar nenhum na memoria

    obs : o tipo undefined nunca é difinido por nós que criamos o algoritmo,
        ela só e difinida se no caso não definimos nenhum tipo ou valor 
        a uma variavel
*/

//##########################################################################################################################################

// NULL -  nulo 

/*
    null tem semelhança com a tipo primitivo undefined onde se for definida, 
    a mesma regra se aplica , (não aponta para lugar nenhum na memoria)
    mas diferente dele o null e um tipo primitivo que determina que o 
    valor atribuido aquela variavel ou aquela função e nula , ou seja ,
    ela não é a mesma coisa de undefined.

    no caso para nós que criamos algoritmos , o null pode ser utilizado 
    para desconfigurar uma variavel.

    um exemplo de utilização do tipo null . Imagine que você tem um site onde 
    o usuario possa selecionar a cor de fundo do perfil dele , ai se ele não 
    selecionar nenhuma cor você configura a sua variavel informando que essa
    variavel não tem nenhum valor no caso ( null )

    veja o exemplo abaixo: 
*/

// usuario não seleciona uma cor de fundo
let backgroudcolorUser = null; 
console.log(backgroudcolorUser); // null


//##########################################################################################################################################

// BOOLEAN - TRUE & FALSE / valores logicos - verdadeiros ou falsos

/*
    o tipo primitivo boolean ou boleanos , ele determina um valor a uma variavel
    verdadeira ( True ) ou falsa ( False )

    um exemplo para entender como o boolean funciona : imagina que eu tenho um 
    sistema onde eu tenha uma flag que determine se um aluno esta aprovado ou
    reprovado. 

    se no caso o aluno estivessse aprovado seria atribuido a ele o valor True 
    (valor boleano explicito que informa verdadeiro).
    mas no caso em que o aluno não fosse aprovado , o valor da variavel aprovado
    seria False, (valor boleano explicito que informa falso), ou seja o aluno 
    não foi aprovado.

    em resumo , quando utilizamos os valores boolean ou logicos , nós temos a 
    inteção de modificar o fluxo do meu progama de acordo com o resuldo seja 
    ele verdadeiro ou falso

    veja o exemplo abaixo: 
*/

let aprovacaoAluno = false;
/*
condição que determina se for true = aprovado , se dor false = reprovado
*/
if (aprovacaoAluno == true){ 
    console.log('aprovado');
}else 
    console.log('reprovado');


/*
    em resumo , quando utilizamos os valores boolean ou logicos , nós temos a 
    inteção de modificar o fluxo do meu progama de acordo com o resuldo seja 
    le verdadeiro ou falso
*/

//##########################################################################################################################################

// TIPOS DE DADOS PASSADOS POR REFERENCIA - só uma breve explicação 


/*
    quando trabalhamas com valores por referencia , que dizer que quando criamos uma variavel no caso 
    criamos uma variavel ( a ) é depois uma variavel ( b ) , fizemos o valor de b apontar para o mesmo 
    local do valor de a aponta na memoria , ou seja , ( a ) e ( b ) apontam para o mesmo local na memoria
    e isso e um tipo de dado passado por referencia , no caso aqui quando temos dados primitivos 

    let a = 2;
    let b = a;

    o valor de a realmente foi copiado para o valor de b , ou seja o valor de b não é uma referencia , mas
    sim uma copia 

    ou seja em tipos primitivos se eu faço esse mesmo tipo de situção: 

    let a = 2;
    let b = a;

    se eu modificar o valor de uma variavel , a outra não sera alterada automaticamente por esta relacionada
    a ela .

*/


//##########################################################################################################################################


// sinais de atribuição no JavaScript 

// sinal de atribuição normal ( = ) 

// sinal de atribuição mais aumento ou decremento de valor ( += ) 
