// -> AULA 24 -  mais sobre strings

// escapar um caractere - com o caractere ( \ )

// let umaSring = "um \" Valor\"";

//------------------------------------------------------------------------------------------------------------------------------------------

// strings são indexsadas

/*
no exemplo em que digitamos um dado e guardamos em uma variavel , 
esse dado tem seus repectivos indices em cada letra 

observe o exemplo
*/

let nome = "Renan";

/*
essa string recebe um indice em cada letra dela de forma enumerada

dessa forma

                    01234
        let nome = "Renan";

assim eu posso mostrar na tela somente a letra localizada em um indice
*/

console.log(nome[0]) // R

// no caso se eu pedir para mostrar no terminal um valor que esta fora do 
// indice da string o resultado sera indefined.

/*
esse mesmo metodo pode ser feito com uma função do JavaScript dentro de uma string

.charAt(posição)
*/

console.log(nome.charAt(1));

//------------------------------------------------------------------------------------------------------------------------------------------

// indexof 

/*
o indexof determina em que indice o dado esta localizado 
*/

console.log(nome.indexOf("Renan"));

// fazendo a busca através do indexof , apartir de um indice 
let nomeCompleto = "Marcio Renan Rocha da Silva";
console.log(nomeCompleto.indexOf("Renan", 6)); // 7


// semelhante ao index of também temos o lastIndexOf

console.log(nomeCompleto.lastIndexOf("Renan", 7)); // 7

/*
o lastIndexOf ele faz a busca da localização de um dado , pesquisando
do final ate o começço dos dados 
*/

//##########################################################################################################################################

// fatiamento de strings

console.log(nomeCompleto.slice(0, 7)); // Marcio

/*
com a função slice e possivel fazer o fatiamento de strings determinando 
o inicio da frase ou palavra que eu queira pegar ate o espaço da ultima 
letra

com a possibilidade de tambem fazer com numeros negativos
*/

console.log(nomeCompleto.slice(-14, -8)); // Rocha


// fazendo a divisão em array com split

console.log(nomeCompleto.split(" ")); // [ 'Marcio', 'Renan', 'Rocha', 'da', 'Silva' ]