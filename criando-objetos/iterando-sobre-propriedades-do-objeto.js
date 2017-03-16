
var pessoa = {
	nome: 'João',
	idade: 21,
	endereco: {
		logradouro: 'Av Afonso Pena',
		numero: 2570,
		bairro: 'centro',
		cidade: 'Uberlândia',
		estado: 'MG'
	}
}

// iterando com for...in
for(prop in pessoa) {
	// console.log(prop);	// mostra as propriedades (nome,idade, endereco) do objeto sem seus valores.
	console.log('->', pessoa[prop]);

	if (pessoa[prop] == 'João') {
		console.log('O nome é João');
	}
	if (pessoa[prop] == 21) {
		console.log('Tem idade 21 anos');
	};

}