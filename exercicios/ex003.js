/*
Luiz Otávio Miranda tem 30 anos , pesa 84 kg 
Tem 1.8 de altura e seu IMC é de 25.92592592
*/ 

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda'; 
const idade = 33;
const peso = 84;
const alturaEmM = 1.8;
let indiceMassaCorporal;
let anoNasc;
anoNasc = 2022 - idade;

// calculo do imc == peso / altura^2

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

console.log(` `);
console.log(`exemplo 1`);

// criando uma string unica com concatenação 
//console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' +  peso + ' kg , tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal); 

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg , tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal); 

console.log(nome, 'nasceu em', anoNasc);

console.log(` `);
console.log(`exemplo 2 template strings`);

// template strings
// criação de console.log com template strings e melhor, mais simples e moderno

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); 

console.log(`${nome} nasceu em ${anoNasc}`);