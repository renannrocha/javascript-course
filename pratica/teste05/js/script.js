const notaUm = Number(prompt("digite a primeira nota"));
let notaUmAluno = document.getElementById("notaUmluno");

const notaDois = Number(prompt("digite a segunda nota"));
let notaDoisAluno = document.getElementById("notaDoisAluno");

const notaTres = Number(prompt("digite a terceira nota"));
let notaTresAluno = document.getElementById("notaTresAluno");

const media = ( notaUm + notaDois + notaTres ) / 3;
let mediaAluno = document.getElementById("mediaAluno");

notaUmAluno.innerHTML = `${notaUm}`;
notaDoisAluno.innerHTML = `${notaDois}`;
notaTresAluno.innerHTML = `${notaTres}`;
mediaAluno.innerHTML = `${media.toFixed(2)}`;




