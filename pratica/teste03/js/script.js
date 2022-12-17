const nomeUsuario = prompt("digite seu primeiro nome ");
const nomeCompletoUsuario = prompt("digite o seu nome completo");
const idade = prompt("digite a sua idade");


const nome = document.getElementById("nome");
const nomeCompleto = document.getElementById("nomeCompleto");
const idadeUsuario = document.getElementById("idadeUsuario");
const descricao = document.getElementById("descricao");

nome.innerHTML = nomeUsuario;
nomeCompleto.innerHTML = nomeCompletoUsuario;
idadeUsuario.innerHTML = idade;
descricao.innerHTML = `é um prazer lhe conhcer ${nomeUsuario}`;