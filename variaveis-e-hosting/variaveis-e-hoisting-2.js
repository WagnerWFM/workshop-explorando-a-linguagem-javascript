var percentualImposto = 0.15;
var totalImposto = percentualImposto * valor;

console.log("Total de imposto a pagar", totalImposto);	//'valor' não foi atribuido valor.

var valor = 100;

//HOISTING, como funciona por baixo dos 'panos':

/*
var percentualImposto, totalImposto, valor;	//valor fica declarado no ínicio, mas sem o valor que lhe foi atribuído embaixo.
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;	

console.log("Total de imposto a pagar:", totalImposto);

valor = 100;

NaN = not a number.
*/