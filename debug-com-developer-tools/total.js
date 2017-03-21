
console.log('Iniciando...');	// Em produção retirar logs.

// receber valores da página HTML.
var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

valorElement.addEventListener('keyup', function(e) {
	var total;
	var valor = parseFloat(valorElement.value ? valorElement.value : 0);	// valorElement (input da página) tem valor? se sim, retorna o valor, se não retorna 0. Verificador ternário.

	if (valor > 0  && valor < 10) {
		total = valor + valor * 0.3 + 5;	// Ex: 5 + (30% de 5) + 5 = 11.5.
	} else if (valor >= 10 && valor < 50) {
		total = valor + valor * 0.1 + 2;	//Ex: 10 + (1% de 10) + 2 = 13.
	} else {
		total = valor;	//atribuí o valor total na página html.
	}

	totalElement.innerHTML = total;	//atribuí o valor total na página html.
});