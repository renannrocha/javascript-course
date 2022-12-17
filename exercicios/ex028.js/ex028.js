// exercicio aula 28 number & Math

let numUsuario = Number(prompt("Digite um numero"));

document.body.innerHTML += `<h1> Seu numero é ${numUsuario}<h1/>`;
document.body.innerHTML += `Raiz quadrada : ${numUsuario / 0.5} <br />`;
document.body.innerHTML += `${numUsuario} é um valor inteiro : ${Number.isInteger(numUsuario)} <br />`;
document.body.innerHTML += `${numUsuario} é considerado um NaN : ${Number.isNaN(numUsuario)} <br />`;
document.body.innerHTML += `Arredondado para cima : ${Math.ceil(numUsuario)} <br />`;
document.body.innerHTML += `arredondado para baixo : ${Math.floor(numUsuario)} <br />`;
document.body.innerHTML += `com duas casas decimais : ${numUsuario.toFixed(2)} <br />`;

