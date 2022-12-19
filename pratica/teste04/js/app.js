// nome do usuario
const nome = prompt("digite seu nome");
const nomeUsuario = document.getElementById("nomeUsuario");

// nome completo
const nomeCompletoUsuario = prompt("digite sue nome completo");
const nomeCompleto = document.getElementById("nomeCompleto");

// idade do usuario
const idade = prompt("digite sua idade");
const idadeUsuario = document.getElementById("idadeUsuario");

// data de nascimento Usuario
const nasc = prompt("digite sua data de nascimento");
const dataNasc = document.getElementById("dataNasc");

// cidade do usuario
const cidade = prompt("digite sua cidade");
const cidadeUsuario = document.getElementById("cidadeUsuario");

// Cep usuario
const cepLocalizacaoUsuario = prompt("digite seu CEP");
const cepUsuario = document.getElementById("cepUsuario");

// innerHTML
nomeUsuario.innerHTML = `${nome}`;
nomeCompleto.innerHTML = `${nomeCompletoUsuario}`;
idadeUsuario.innerHTML = `${idade}`;
dataNasc.innerHTML = `${nasc}`;
cidadeUsuario.innerHTML = `${cidade}`;
cepUsuario.innerHTML = `${cepLocalizacaoUsuario}`;

let confirmUsuario = confirm("confirma suas informações ?");