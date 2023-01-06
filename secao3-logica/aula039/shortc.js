console.log('Renan'&&false&&'fernando');
// no caso ele retorna o valor false

console.log('nome1' && 'nome2' && ' ');
// retorna ' '

const a = 0;
const b = false;
const c = 'false'; // considera-se true pois a um vaor dentro da string
const d = undefined;
const e = null;

console.log(a || b || c || d || e); 

