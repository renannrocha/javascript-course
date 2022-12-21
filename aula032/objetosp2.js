// aula 032 - Objetos (Basico)

// function informacaoPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome : sobrenome,
//         idade : idade  
//     };
// } 

/*no caos de construção desse tipo de função , pode observar que 
dentro do objeto a uma repetição onde nome : nome , sobrenome : sobrenome.
isso não é não é necessario nesse caso pois so indicando os mesmos nomes
que estão nos parametros o imterpretador do javascript vai entender que os 
argumentos enviados tam que ser direcioandos aos atributos do objeto 

então ele ficaria dessa forma mais simples (funcionando perfeitamente)*/


// função factory
function informacaoPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

//------------------------------------------------------------------------------

// em enão em geral podemos criar um objeto criando uma variavel 

// const pessoa1 = {
//     nome : 'Luiz',
//     sobrenome : 'miranda',
//     idade : 20
// };

// quando uma função esta dentro de um objeto , ela é chamada de metodo !

/* ou seja podemos implementar funções dentro de um objeto 

veja um exemplo onde a pessoa1 fala uma frase*/

const pessoa1 = {
    nome : 'Luiz',
    sobrenome : 'Miranda',
    idade : 20,

    // função
    fala() {
        console.log("ola mundo");
    }
};

// não ha necessidade de colocar function antes do nome 

/*então se eu quero que o objeto pessoa um execute a função de falar 
eu executo a ação : */

pessoa1.fala(); // Ola mundo !

// então a ação que esta dentro do meu objeto sera executada

/*nesse caso aqui não é uma função muito pratica pois poderia criar uma 
função fora do objeto de maneria bem mais pratica , no caso nem precisaria
da pessoa para chamar o metodo fala */

// -----------------------------------------------------------------------------------------------

// palavra this 

/*podemos referenciar um objeto e seus atributos atraves da palavra this 

a palavra this nesse constexto siginifica esta objeto */

const usuario = {
    nome : 'Marcio',
    sobrenome : 'Renan',
    idade : 20,


    fala() {
// nesse caso o this esta pegando o valor do atributo nome , e atraves do console.log informa que ele esta falando oi 
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
        console.log(` minha idade atual é ${this.idade}`);
    },
// o metodo incrementa idade apos ser execuatada vai incrementar mais 1 a idade
    incrementaIdade() {
        this.idade++;
    }
};

usuario.fala(); // Marcio Renan esta falando oi...


usuario.incrementaIdade();
usuario.fala();