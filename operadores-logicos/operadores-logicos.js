/*
	|| e && : traz como resultado o nome true ou false.
*/

// Operadores lógicos boolean.
var ativo = true;
var administrador = false;

console.log('Ou (||):',ativo || administrador);
console.log('And (&&):', ativo && administrador);

//Operadores lógicos entre binários. Um | (ou) ,  & (AND) compara os números em binários.
// Binários: 64 32 16 8 4 2 1, começa em 1.

var a = 10;	//binário: 1010.
var b = 8;	//binário: 1000.

console.log( a | b);
console.log( a & b);