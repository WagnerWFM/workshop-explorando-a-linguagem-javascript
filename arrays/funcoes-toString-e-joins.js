// Ambas funções gera um retorno do tipo string contendo todos os elementos do array.
// join() é mais usado devido á pode-se personalizar os separados entre os dados do array.
// toString() é menos usado.

var carros = ['Fox', 'Celta', 'Gol'];

var c = carros.toString();	//gera uma única string separado por vírgula.
console.log(c);
console.log(typeof c);	// tipo: string única separado por vírgula.

console.log('Utilizando join');	//Gera uma única string também com todos os dados do array.
console.log(carros.join(' - '));	//Pode personalizar os sepradores entre os dados.
console.log(carros.join(', '));

