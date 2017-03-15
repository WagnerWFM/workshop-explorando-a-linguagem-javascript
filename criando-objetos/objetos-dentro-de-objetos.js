
var pessoa = {
	nome: 'jose',
	idade: '25',
	endereco: {	//objeto dentro de objeto.
		logradouro: 'Av. Brasil',
		numero: 1001,
		cidade: 'Uberlândia',
		estado: 'MG',
		complemento: 'casa'
	}
}

console.log(pessoa);
console.log('Cidade em que José mora:', pessoa.endereco.cidade);

//alterar propriedade de um objeto dentro do outro.
pessoa.endereco.numero = 2590;
console.log('Número alterado:', pessoa.endereco.numero);

// Mostra propriedade que não existe
console.log(pessoa.endereco.cep);		//undefined ( não foi definido variável cep em endereço).

// Mostrar diâmicamente um dado do objeto. Pode pegar o valor de um combobox por exemplo.
console.log('Logradouro onde josé mora:', pessoa['endereco']['logradouro'] );

