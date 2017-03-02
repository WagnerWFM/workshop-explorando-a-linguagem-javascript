var percentualImposto = 0.15;
valor = 100;
var totalImposto = percentualImposto * valor;

console.log("Total do imposto a pagar", totalImposto);

var valor;

/*valor = 10;
console.log("Valor", valor);
*/

//HOISTING
//O HOISTING juntas as variáveis, mesmo que foi declarado embaixo a variável 'valor' ela vai 
//para cima. É o mesmo que fosse declarada no ínicio. Fica desse modo:

/*
var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
valor = 100;
totalImposto = percentualImposto * valor;

console.log("Total do imposto a pagar", totalImposto);

//variavel valor declarado aqui, vai para cima com o HOISTING.
*/
