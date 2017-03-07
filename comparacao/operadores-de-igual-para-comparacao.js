
// dois iguais ( == ) : compara os valores sem verificar o tipo. Ex: um inteiro com uma string.
// três iguais ( === ) : compara os valores verificando o tipo e o valor.


// dois iguais (==).
var x = 10;
var y = '10';
console.log('Um inteiro e uma string são iguais:', x == y);	//true

// O mesmo vale para diferente: !=
console.log('X e Y são diferentes:', x != y);	//false, então são iguais.

//=========================================================

//Três iguais (===). MAIS RECOMENDADO!
var z = 10;
var w = '10';
console.log('Um inteiro e uma string são iguais:', z === y);	//false, não são iguais.

// O mesmo vale para diferente !==
console.log('Z e W são diferentes:', z !== w);	//true, são diferente.
