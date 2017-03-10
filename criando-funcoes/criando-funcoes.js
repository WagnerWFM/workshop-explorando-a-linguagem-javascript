
//functions declaration
function somar(a, b) {	//Não é necessário definir os valores como argumentos na função que ela recebe do mesmo modo.
	console.log('Argumentos passado para função ->', arguments);	// 'posição': valor, 'posicao': valor, ...
	return a + b;
}

// function expression
var subtrair = function (a, b) {
	return a - b;
}

var resultadoSoma = somar(2,3);
console.log('2 + 3 =', resultadoSoma);

var resultadoSubtraido = subtrair(10, 8);
console.log('10 - 8 =', resultadoSubtraido);


// Obs. functions declaration pode ser declarada embaixo da chamada da mesma e 
// function expression não. Sempre declarar no começo do código as funções.

