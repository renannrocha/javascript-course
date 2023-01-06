<h1><b>Aula 40 -  estrutura condicional if else</b></h1>

<p>Para podermos entender melhor como funciona a estrutura condicional , vamos propor um exemplo onde o usuario determine um certo horario e o sistema atraves desse horario ira lhe dar Bom dia , Boa tarde ou Boa noite.</p>


        const hora = 10;
        
        if (hora < 12) {
            console.log(`Bom dia`);
        }


<p>A sintaxe basica de uma estrutura condicional sempre começa com if(se), no caso um bloco de estrutura condicioanl e muito parecido com uma função , mais são totalmente diferentes , no caso do if ele vai avaliar a condição que fica dentro dos parenteses e se aquela condição for verdadeira ele executa uma tal ação, no caso eu posso colocar qualquer coisa dentro do bloco da estrutura condicional</p>

<hr>

<p>Agora pense em um sistema mais robusto que checa o horario entre 0 e 11 horas para (Bom dia), entre 12 a 17h para (Boa tarde) e entre 18 e 23h para (Boa noite).</p>

<p>Para nos adicionarmos uma estrutura dessa vc concorda comigo que precisamos de mais condições aqui no caso precisamos encadiar uma serie de condições aqui para fazer isso eu vou utilizar uma condição else if(senão se)</p>



        const hora = 18;

        if ( hora >= 0 && hora <= 11){
            console.log(`Bom dia !`);
        } else if (hora >= 12 && hora <= 17) {
            console.log(`Boa tarde !`);
        } else if (hora >= 18 && hora <= 23){
            console.log(`Boa noite`);
        }


<hr>
<h2><b>Condições basicas a respeito de estruturas condicionais</b></h2>

<p>- if pode ser utilizado sozinho</p>

        if (hora >= 0 && hora <= 11) {
            console.log(`Bom dia`)
        }

<p>- sempre que eu utilizo a palavra else , eu preciso de um if antes</p>

        if ( argumento ){

        } else {

        }

<p>- posso ter varios else if na checagem</p>
<p>- so posso ter um else na checagem </p>
<p> - podemos usar condições sem else if , utilizando apenas if e else</p>
