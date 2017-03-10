

// Revisar: undefined é do tipo undefined.
//			null é do tipo object.
// Uma variavél não inicializada tem o valor de undefined (nada, se valor) e se compararmos um tipo
// undefined com null usando dois iguais (==) o resultado é 'true', porque dois iguais não verifica
// o tipo da variável somente o valor e, como os doi são nada, sem valor vão ser iguais. Já usando
// três iguais (===) o resultado é 'false' porque compara uos tipos e são do tipo diferentes.
// Conclusão: posso verificar se uma variável é vazia ou nulla conforme o exemplo abaixo:

var x;
console.log('Tipo de X:',typeof x);

var y = null;
console.log('Tipo de Y:', typeof y);

var resultado = x == y;	//true
console.log('Comparação dois iguais:',resultado);

var resultado2 = x === y;	//false
console.log('Comparação três iguais:',resultado2);

// Então pode-se usar essa verificação abaixo no dia a dia para saber se uma variável é null ou undefined:

var z;	//undefined
if (z != null) {	// Para comparar o tipo como em 3 iguais, usa-se !== .
	console.log('Existe um valor em X');
} else {
	console.log('X não tem um valor útil');
}
