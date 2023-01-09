function meuEscopo(){
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento){
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
