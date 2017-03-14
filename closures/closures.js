// CLOSURES: função dentro de outra, onde encapsulamos os atributos dentro das funções, já que ficar
// escopo global não é uma boa prática. Essa variável é executada apenas uma vez e depois sempre
// que chamarmos a função interna, será executada a função interna com o estado anterior. 
// Por exemplo valor ´do último valor atribuido a variável valor.

function incrementar() {
	var valor = 0;	// valor é executado apenas uma vez.

	return function() {
		return ++valor;
	}
}

/*
console.log	(typeof incrementar());
console.log('Resultado:', incrementar());	//retorna function. O retorno de uma função e function.
*/
console.log('Resultado:', incrementar());	//retorna a function(){ return ++valor;}

var funcao = incrementar();	//recebe o retorno da função, que é a função interna: function(){ return ++valor;} e quando chamar essa variável 'funcao' executa a função interna.
console.log('tipo de funcao:', typeof funcao);

console.log(funcao());
console.log(funcao());
console.log(funcao());
