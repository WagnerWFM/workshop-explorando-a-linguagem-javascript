// EVITE DECLARAR VARIÁVEL GLOBAIS. DECLARE SEMPRE QUE POSSIVEL DENTRO DE FUNÇÕES.

var nome = 'AlgaWorks'; 	// var global.

var capitalizar = function () {
	var nome = 'AlgaWorks'.toUpperCase();	//variável local a função capitalizar.
}

capitalizar();
console.log('nome:', nome);

var capitalizar2 = function () {
	nome = 'Java Script'.toUpperCase();	// altera variável global 'nome'.
}

capitalizar2();	// chamada da função, altera o valor da variável 'nome'.
console.log('Nome:', nome);


// Nota: O javascript se não usarmos o comando 'var' para criar a variável, ela é criada com o 
// escopo global. No caso da função centralizar2(), se não existisse a var nome global seria criada
// internamente essa variável global, algo que não é legal fazer.