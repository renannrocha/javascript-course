<h1>Aula 39 - Avaliação de Curto- Circuito (Short-Circuit)</h1>


<h2>avalição de curto circuito com and (&&)</h2>
<p>se eu estou utlizando a expressão and , a partir do momento que o javascript encontrou a minha expressão ande teve uma expressão que avalia em falso ele vai retornar o valor falso , é se ele não encontra nada , ele vai checar todas as expresões e vai me retornar a ultima</p>
<hr>
<h2>valores que retornan em falsy</h2>
<p>-> false</p>
<p>-> 0</p>
<p>-> ' '  " "  ` `</p>
<p>-> null / undefined</p>
<p>-> NaN</p>
<p>
qualquer coisa diferente a esses valores são considerados true.
</p>

<p>a avaliação de curto circuito se da quado ha um valor false, no caso ele retornara o valor falso</p>

<hr>
<h2>avaliação de curto circuito com or (||)</h2>
<p>na caso do or como nesse tipo de expressão ele precisa de apenas uma condição ser verdadeira para que o conjunto seja true , no caso de avalização de curto , ele vai avaliar todas as condições , e vai retornar somente a condição que ele é considerada true 

exemplo: </p>


    <script>
        console.log(0 || false || undefined || `Renan Rocha` || true);
        // retorna o primeiro valor true valor true `Renan Rocha`
    </script>

<p> esses tipo de exemplos podem ser implementados para facilitação de todo o codigo . 

Imagine se eu crio um web site onde o usuario pode modificar a cor de fundo , logo eu defino duas variaveis uma para a escolha de cor do usuario e uma para cor padrão caso ele não escolha , mas em vez de fazer toda uma estrutura condicional para caso ele mude ou não a cor de fundo podemos apenas criar uma avaliação de curto circuito para que o progama funcione sem que eu tenha que criar uma estrutura de condição </p>


    <script>
        const corUsuario = null;
        const corPadrao = corUsuario || 'branco';

        console.log(corPadrao); // branco
    </script>
