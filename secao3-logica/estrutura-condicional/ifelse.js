// entre 0 e 11h -  Bom dia
// entre 12 e 17 - Boa tarde
// entre 18 e 23h - Boa noite 

const hora = 10;

if ( hora >= 0 && hora <= 11){
    console.log(`Bom dia !`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde !`);
} else if (hora >= 18 && hora <= 23){
    console.log(`Boa noite`);
}