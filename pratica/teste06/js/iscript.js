// algoritimo para salvamento de dados e manipulações de eventos no navegador 

function meuEscopo(){
    // query selector para selecionar todo o formulario
    const form = document.querySelector('.form');
    //query selector para selecionar toda a area de resultado
    const resultado = document.querySelector('.resultado');
    // criação da variavel para armazenar os dados dos inputs
    const dados = [];



    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');

        dados.push({
            nome : nome.value,
            sobrenome : sobrenome.value
        });

        resultado.innerHTML += `<p> nome : ${nome.value}</p>`;
        resultado.innerHTML += `<p> sobrenome : ${sobrenome.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();