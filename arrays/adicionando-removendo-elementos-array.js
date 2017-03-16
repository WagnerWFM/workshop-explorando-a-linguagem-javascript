/*
	Funções: push(), pop(), unshift, shift.

*/


var emails = [];

console.log('Tamanho array emails:', emails.length);

// push() adiciona no final do array.
emails.push('maria@email.com');
emails.push('normandes@email.com');
emails.push('jose@email.com');

// pop() remove o último elememento do array.
console.log(emails);
console.log('Remove o último email e retorna ele (email removido)', emails.pop());
console.log('Objeto completo:', emails);

// unshift() adiciona no ínicio do array.
console.log('Adicionar no primeiro elemento:', emails.unshift('pedro@email.com'));
console.log(emails);

// remove no ínicio do array.
emails.shift();
console.log('Removido no inicio:', emails);