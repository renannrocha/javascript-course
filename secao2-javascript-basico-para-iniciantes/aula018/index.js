// diferenças entre as funções var e let 

// função var

var nome = "Marcio";
var nome = "Marcio Renan"; // redeclarações de variaveis com a função var não aponta erros no sistema

console.log(nome);

// não recomendavel utilizar , pois gera bugs e erros na aplicação



// função let 

let nomeUsuario = "Renan";

// let nomeUsuario = "Renan Rocha" // vai dar erro

/*
let nomeUsuario = "Renan Rocha"
    ^

SyntaxError: Identifier 'nomeUsuario' has already been declared
*/

console.log(nomeUsuario);


// com a função let , redeclarações de variaveis não são permitidas




// nunca faça isso 

mensagem = "Olá Mundo!" 

console.log(mensagem);

/* 

definir variaveis sem let ou const pode gerar bugs e erros no seu 
algoritmo , pois meio que gera uma variavel global que pode 
influenciar em funcionalidades dentro do seu algoritimo.

por isso sempre que for criar uma variavel utilize: 

- let (para variavies com valores variados).
                    ou
- const (para valores que não vão alterar seu valor).

*/