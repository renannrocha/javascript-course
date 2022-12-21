// aula 031 - Funções (Basico)

/* 
funções executam ações  , ex : imagina que vc tem um 
trecho de codigo que executa alguma ação , claro , se 
você vai criar a função vc sabe o que ela faz , mas a 
unica coisa que vc quer fazer com uma função é mandar 
um valor para ela e geralmente pegar um valor devolta,
claro, também tem funções que não retornam valores 

a sintaxe basica para criar uma função simples e bem facil
sendo que ha varias maneira de se criar funções dentro do 
JavaScript

veja o modelo de sintaxe de construção simplesa seguir: 


function nomeDafunção(){

}

sobre funções : 

1° -> o nome da função segue as mesmas regras de nomeação de 
uma variavel 

2° -> dentro dos parenteses podem vir valores , inputs e etc

3° -> a delimitação do corpo da função é feita pelo sinal de
chaves ( {} ) , nesse modelo não ha necessidade de colocar 
ponto e virgula no final 

*/

//-------------------------------------------------------------------------------------------

// exemplo de função : 

function saudacao(){
    console.log("Ola !");
}

// chamando a função 
saudacao() /* dessa forma sera demostrado a frase 'Bom dia !'
na tela */

/* sempre que f or chamar uma função , precisa colocar os 
parenteses na frente para que o motor do JavaScript entenda
que essa função esta sendo executada , sendo a mesma coisa de 
alert, confirm , so que no caso essa foi uma função que vc 
acabou de criar */

/*é claro que esse exemplo é mais simples mas saiba que dentro 
do corpo da função vc pode executar quantas linhas de codigo 
que você quiser , e o diferencial disso é que tudo que você 
coloca em uma função está protegido, ou seja, tudo que estiver
dentro do corpo da função pertençe somente a função 

por exemplo , eu não posso pegar uma variavel que esta dentro de
uma função e dar um novo valor a ela fora dela*/

//-------------------------------------------------------------------------------------------

// enviar dados - parametros

/* nesse exemplo suponhamos que queremos dar bom dia é falar o nome
da pessoa , eu quero que cada ves que eu char essa função eu mude o 
nome da pessoa a quem eu vou dar Bom dia , para isso eu posso criar
PARAMETROS.

Os parametros vem dentro dos parenteses da função (não do corpo), é 
algo muito similar a variveis */


function saudacao2(nome){ 
    console.log(`Bom dia ${nome} !`);
}

/* nesse momento minnha função pode receber um valor nesse parametro 
chamado nome 

com o parametro criado eu posso enviar dados para essa função , para
enviar dados a uma função através de um parametro , eu chamo essa
função e dentro dos parenteses eu coloco o valor que eu quero enviar 
para a função  */

saudacao2('Renan'); // Bom dia Renan !
saudacao2('Maria'); // Bom dia Maria !
// pode utilizar essa função quantas vezes vc quiser

/* com o valor que você envia para a função , vc pode utilizar esse 
para realizar qualquer coisa dentro da sua função */

//-------------------------------------------------------------------------------------------

// retornar um valor de uma função 

/* toda função dentro do JavaScript vai retornan o valor undefined 
caso você não especifique o que ela tem que retornar

se eu quero que minha função faça alguma coisa e retorne e também
retorne um valor , utilizase a palavra return*/

/* não é o ideal nós criarmos uma função para que ela retorne um 
valor completamente diferente do que pensamos que ela iria 
retornar */
// existem funções também que não retornam valores 

//exemplo1 - usuario

function nomeUsuario(usuario){
    return `Nome do Usuario : ${usuario}`;
}
// o valor da função foi atribuido a uma variavel 
const usuario = nomeUsuario('Renan')
console.log(usuario); // Nome do Usuario : Renan

// exemplo2 - soma

// função nessecita que seja enviado dois valores
function soma(x, y){ 
    const resultado = x + y ;
    return resultado;
}

console.log(soma(5, 10)); // 15
console.log(soma(10, 10)); // 20
console.log(soma()); // NaN 

/* se por acaso eu querer que a função ja determine um valor para 
o parametro , caso eu não envie o valor e so determinar no caso da 
função soma , ficaria assim

function soma(x = 1, y = 1){

    dessa forma se o não for atribuido nenhum valorao parametro ele 
    enviara os valores pre definidos no caso x = 1 e y = 2. 
*/

/*                  IMPORTANTE !!

    uma coisa importante que você deve saber sobre funções é que
    não so em JavaScript mais em qualquer linguagem de progamação
    é que a partir do momento que o imterpretador encontrou a 
    palavra ( return ), o imterpretador do JavaScript não vai mais
    executar nenhuma acão aba,nvxhf
    ixo de return */

//-------------------------------------------------------------------------------------------

// 2° forma de função -  função anonima 

/* no exemplo anterior , aquele tipo de função conhecida como
declaração classica de função.

podemos jogar uma função dentro de uma variavel - no caso isso seria 
uma função anonima

veja a sintaxe : */

const raiz = function (n) {
    return n ** 0.5;
};

console.log(`a raiz quadrada de 9 é : ${raiz(9)}`);

//-------------------------------------------------------------------------------------------

// 3° forma de função -  arrow function 

/* arrow function e a forma mais atualizada de criar uma função , criada
pra ser algo mais simples e facill para o progamador , mais tem as mesmas 
forma dos outros estilos de função 

veja a sintaxe :*/

const media = (x, y, z) => x + y + z / 3; 

const subNum1 = (x = 1, y = 1) => {
    const calculo = x - y;
    return calculo;
}
console.log(subNum1(2, 9)); // -7
// no caso de apenas um valor no parametro retirasse os parenteses
