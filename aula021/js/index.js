// -> AULA 21 - alert, confirm e prompt (Navegador).

/*
    comandos do navegador para suporte nos exercicios
*/

alert('com a nossa mensagem.');
// função de alert com o abjeto window 
window.alert('outra mensagem');


// função de confirmação

window.confirm('deseja encerrar a secão'); 
// caso o usuario escolher cancelar , vai ser retornado um valor boolean false
// caso o usuario escolher confirmar , vai ser retornado um valor boolean true 


// função de digitação do usuario - prompt 

window.prompt('Digite o seu nome :');


// -------------------------------------------------------------------------------------------

// valores dentro de uma função guadarda dentro de uma variavel 


/*
    solicitar para um usuario confirmar ou cancelar uma ação , retorna um valor true ou false
    esses valores podem ser armazenado dentro de variaveis para desempenhar uma função
*/

let confirmar = confirm("deseja encerrar a sessão ?");

if (confirmar == true){
    alert('sessão encerada');
}


/*
    solicitar para o usuario digitar algo , no caso o dado que o usuario digitar tambem seré
    armazenado em uma variavel 
*/

let nome = prompt("digite o seu nome"); 
alert(`prazer em lhe conhecer ${nome}`);

// obs.: tudo que o usuario digitar atraves da função prompt sera retornado como string

/*
let num1 = prompt('digite um valor');
let num2 = prompt('digite outro valor');
calculo = Number(num1) + Number(num2);

alert(`a soma entre os valores ${num1} e ${num2} é igual a ${calculo}`);
*/