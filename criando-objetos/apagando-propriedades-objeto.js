
var pessoa = {
	nome: 'joaquim',
	idade: 25,
	endereco: {
		logradouro: 'Av afonso pena',
		numero: 3780,
		bairro: 'centro',
		cidade: 'Uberlândia'
	}
}

console.log('Objeto completo:', pessoa)

// Apagar propriedade do objeto.
delete pessoa.idade;
console.log('Idade da Pessoa (deletado a idade)-->:', pessoa.idade	);

console.log('->', pessoa);

//remover dinâmicamente
delete pessoa['endereco'].bairro;
console.log('Pessoa com o bairro removido:', pessoa);

