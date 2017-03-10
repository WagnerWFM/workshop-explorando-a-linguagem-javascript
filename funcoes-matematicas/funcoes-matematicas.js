
var menorNota = Math.min(3, 4, 7, 9, 1, 2);
console.log('Menor nota:', menorNota);

var maiorNota = Math.max(3, 9, 6, 3, 8, 2, 1);
console.log('Maior nota:', maiorNota);

var temperatura = Math.round(2.3);	// x.5 arredonda para cima.
console.log('Temperatura arredondada:', temperatura);

var aleatorio = Math.random();
console.log('Número aleatório:', aleatorio);	// Gera números de 0 até 1. *1 exclusivo (não gera).

var numero = aleatorio * 60;	//gera número de 0 a 60.
console.log('numero entre 0 e 60:', numero);
var numeroMega = Math.floor(numero) + 1;	//arredonda sempre para baixo. + 1 se for 0, fica 1. Como vai até 59.xxxx vai arredondar para 59 e +1 gera o número 60 também.

console.log("Número da mega: ", numeroMega);

