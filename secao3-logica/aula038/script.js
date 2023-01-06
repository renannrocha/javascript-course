// aula 038 - Operadores logicos 

/*
Operadores logicos 

&& -> AND -> E              -- todas as expressões precisão ser verdadeiras para retornar true.
|| -> OR -> OU              -- pelo menos uma expressão precisa ser verdadeira para retornar true.
! -> NOT -> NÃO             -- faz a inverção dos valores , se um valor for verdadeiro ele da falso 



operadores logicos tem como sua função checar mais de uma comparação , se complementa com os operadores de 
comparação , so no caso do not ele compara somente uma.

*/

// exemplo and(&&)

console.log(true&&true); // true
console.log(false&&true); // false
console.log(false&&true&&true&&true); // todas as expressões precisão ser verdadeiras 
/*
a regra que se aplica ao comparador and(&&), é que todas as alternativas tem que estar verdadeiro para que 
o conjunto inteiro seja verdadeiro, mas no caso sejam afirmações opostas uma sendo verdadeiro e a outra sendo 
falsa , a afirmação inteira sera falsa.
*/

//---------------------------------------------------------------------------------------------------------------

// exemplo or(||)

const expressaoOr = true||false||false;
console.log(expressaoOr);

/*
a regra que se aplica ao comparador or(||) é que pelo menos uma alternativa ou condição esteja correta para que 
o conjunto inteiro seja verdadeiro , mas se todas as afirmações forem falsas(false) , a afirmação retornara false.
*/

//---------------------------------------------------------------------------------------------------------------

// exemplo NOT(!)

console.log(true); // true
console.log(false); // false

console.log(!true); // false
console.log(!false); // true

/* a regra que se aplica para o perador NOT(!) é que ele inverte uma expressão(nega o valor)*/ 


//---------------------------------------------------------------------------------------------------------------
