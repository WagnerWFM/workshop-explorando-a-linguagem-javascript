// Pode-se ter diversos tipos de elementos dentro de um array.Exemplo abaixo:

var acessorios = {som: 'Pioneer', banco: 'Couro'};

var ligar = function (arg) {
	console.log('Ligando o carro...', arg);
}

var carro = [ 'Fox', 4, acessorios, ligar ];

console.log(carro);
console.log(carro[2]);	//mostra objeto
console.log(carro[2].som);	//mostra propriedade específica do objeto.

console.log(carro[3]);	//retorna um function.
console.log(carro[3]('Ok'));	//retorna a msg 'ligando o carro... OK'.

// Usar forEach para mostrar elementos do array.
console.log('---> Inicio forEach');
carro.forEach(
	function(elemento) {
		console.log(elemento);
		if (elemento.som === 'Pioneer') {
			console.log('Existe um som Pioneer');
		}
	});
