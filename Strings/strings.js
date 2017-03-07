

//Funções com Strings.

//Aspas simples e duplas não difere.

var x = 'Algaworks';	//Aspas Simples
console.log('Tipo de X:', typeof x);

var y = "Algaworks";	//Aspas duplas.
console.log('Tipo de Y:', typeof y);


// Propriedades das Strings

console.log("Tamanho de X: ", x.length);	//Tamanho da string.

var resultado = x == y;
console.log("(Dois iguais) X é igual a Y:", resultado);

var resultado = x === y;
console.log("(Três iguais) X é igual a Y:", resultado);	//recomendado utilizar.

//Indices: retornam números da posição começando a contar do 0.
var m = 'Seja bem vindo a Algaworks';
console.log('Posição palavra vindo, (começando posição 0): ', m.indexOf('vindo'));	//começando de 0;
console.log('Posição primeira letra a, (começando posição 0): ', m.indexOf('a'));	//começando de 0;
console.log('Posição de uma letra que não existe (começando posição 0): ', m.indexOf('z'));	//retorna -1.

console.log('Último ocorrência da letra a:', m.lastIndexOf('a'));

// Propriedades substrings
var s = 'A arte de programar';
console.log('Posição 0 até 6:' );
var res = s.substring(2, 6);	//posição 2 ao 6 -1 = 5. Pega uma posição a menos.
console.log(res);

//Passando um parâmetro para substring
var t = 'A arte de programar';
console.log('Posição 2 em diante:' );
var res_t = s.substring(2);	//posição 2 em diante.
console.log(res_t);

// slice: contar de trás para frente.
var sl = 'Teste Algaworks OK';
console.log('Buscando a palavra Algaworks de trás pra frente: ', sl.slice(-12, -2));

//substr: recebe como parâmetro a quantidade de caracteres e substring: recebe a posição.
var sb = 'Teste Algaworks OK';
console.log('Valores depois da posição 6 mais 4 posições pra frente: ', sb.substr(6, 4));

var repl = 'Seja bem vindo <nome>';
var repl = repl.replace('<nome>', 'José');
console.log('Palavra alterada (replace):', repl);

// Maiúscula e minúscula
var m2 = "Algaworks Softwares e Treinamentos";
console.log('Maiúscula:', m2.toUpperCase());
console.log('minúscula:', m2.toLowerCase());

//Concatenar Strings.
var m3 = 'Olá'.concat(' ', 'Henrique');
console.log('String concatenada: ', m3);

var m4 = "Wagner Fernandes".charAt(4);
console.log('Valor do campo da posição 4: ', m4);