//No javaScript todo numero é do tipo number.

var idade = 25;
console.log('Tipo da idade:', typeof idade);

var preco = 14.99;
console.log('Tipo de preço:', typeof preco);

//Padrão IEEE754 - problema de precição.
var x = 0.3 - 0.2;	//Tipo number e segue padrão double 64 igual do java.
console.log('X: ', x);	//resultado: 0.09999999999999998

// resolver precição acima: Multiplica por 10 e depois divide.

x = (0.3 * 10 - 0.2 * 10) /10;	// (30 / 20) / 10 = 0.1
console.log('Valor de X atualizado:', x);

// Tem uma função também que arredonda o valor. Ex: 15.4 arredonda 15, 15.6 (acima) arredodan para 16.
console.log('Valor X arredondado:', preco.toFixed());	//arredonda casa decimal, mas não é o valor exato.

//Funções dos tipos de dados.

y = 10;
console.log('Tipo de Y:',typeof y);
y = y.toString(2);	//passa para string na base binária.
console.log('Y em binário: ', y);	//1010 (binário): 8421 -> 8 + 2 = 10.


// Números INFINITO NEGATIVO e INFINITO POSITIVO.

var i = 10 / 0;
console.log('Valor de I:', i);	// Infinity
console.log('Tipo de I:', typeof i);	//number

var x =  - 10 / 0;
console.log('Valor de I:', x); //-Infinity
console.log('Tipo de I:', typeof x);	//number

//NaN (Not a Number)

var z = 10 / 'Algaworks';
console.log('Valor de Z:', z);	//NaN: nao é um número.

// javaScript converte uma string que possui número para o tipo number.

var w =10/ '2';
console.log('Valor de W:', w);
console.log('Tipo de W: ', typeof w);