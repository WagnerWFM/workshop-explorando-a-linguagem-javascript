
var nomes = ['João', 'José', 'Ana','Maria'];

//for tradicional
for (var i = 0; i < nomes.length; i++) {
	console.log('nomes[', i,'] =', nomes[i]);
}

// ForEach: para cada.
console.log('ForEach -->')

nomes.forEach(function(e) { //cria um função anônima que recebe um argumento para cada elemento do array.
	console.log(e);
	console.log(typeof e);
});

