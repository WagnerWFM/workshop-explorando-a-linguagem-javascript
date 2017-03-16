// Comparar objetos no JavaScrip precisa criar uma função, porque ainda não existe.

var joao = {
	nome: 'João',
	idade: 25,
	email: 'teste@email.com',
	igualA: function(obj) {
		return this.email == obj.email;	//escrever somente a palavra email, irá ocorrer um erro, 
									//porque deve especificar se o email é this.email(escopo local) ou obj.email(veio de outro escopo externo).
	}
}

var maria = {
	nome: 'Maria',
	idade: 24,
	email: 'teste@email.com'
	//A mesma função pode ter em maria, mais pra frente será ensinado uma forma de não ter 
	// que repetir o código em cada objeto.
}

console.log(joao == maria);
console.log(joao === maria);
console.log('O email do João e da Maria são iguais?', joao.igualA(maria));

