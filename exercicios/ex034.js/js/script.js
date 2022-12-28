// exercicio 034 - arrays , function e objects

// todos os eventos vão ter on ( onclick ,  onsubmit etc)


// function meuEscopo () {
//     const form = document.querySelector('.form');

//    -  nesse evento voce previne o que era para acontecer por padrão
//     form.onsubmit = function(evento) {
//         evento.preventDefalt(); 
//     };
//     function recebeEventoForm(evento) {
//         evento.preventDefault();
//         console.log('form não foi enviado');
//     }
//    -  form adiciona um escutador de eventos no meu formulario
//     form.addEventListener('submit', recebeEventoForm);

// }

// meuEscopo();

function meuEscopo () {
	const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

	function recebeEventoForm(evento) {
        evento.preventDefault();

        // diminui a localização do que eu quero selecionar por isso form 
		const nome = form.querySelector('.nome');
		const sobrenome = form.querySelector('.sobrenome');
		const peso = form.querySelector('.peso');
		const altura = form.querySelector('.altura');
        
        // adicionando os indicies com push 
        pessoas.push({
            //resgatar os valores com .value
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;
    }
    // adiciona um espião de eventos
	form.addEventListener('submit', recebeEventoForm);
}


//sempre chamar a fução
meuEscopo();

