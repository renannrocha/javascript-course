// aula 032 - Objetos (Basico)

/* em ajavascript pode criar nossos proprios objetos

vamos com um exemplo .  Imagine que eu precise criar um cadastro 
de varias pessoas aonde necessitaria do nome, sobrenome e idade,
em vez de fazer varias variaveis com nome, sobrenome e idade , 
podemos criar um objeto pessoa , onde os atributos seriam as informações
sobre ela .*/

// const pessoa1 = {
//     nome: "luiz",
//     sobrenome: "Miranda",
//     idade: 25
// };


// console.log(pessoa1.nome);

/* dessa forma ainda não foi facilitado pois imagine ter que criar mais 
de mil dessas para solvar as informações das pessoas, então podemos criar 
uma função que cria esses objetos automaticamente , e isso e bem simples
de fazer veja : */
                            // parametros
function informacaoPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome : sobrenome,
        idade : idade // pode se observar a repetição 
    };
} 

// então agora eu posso utilizar minha função para criar 

const pessoa1 = informacaoPessoa("Marcio", "Renan", 20); // argumentos 

// então dessa maneira essa função esta me retornando um objeto inteiro

console.log(pessoa1.nome); // Marcio

/* esse tipo de função apresentada , pode ser chamada como factory ou seja
essa função cria objetos */