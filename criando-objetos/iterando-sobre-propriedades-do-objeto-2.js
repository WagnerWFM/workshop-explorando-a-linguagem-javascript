
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
		console.log('OK');
	}
	if (pessoa[prop] == 21) {	//daqui para baixo o js mudou o valor de nome para idade.
		console.log('Tem idade 21 anos');
		console.log(pessoa[prop]);
	};

	if (pessoa[prop] == 'João') {	// Resultado: ok, porque o js joga essa verificação para cima, embaixo do segundo if igual a esse.
		console.log('OK');
	}

}