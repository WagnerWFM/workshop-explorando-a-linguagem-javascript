// Minha opinião: No laço for o que é mais importante é a condição de parada. Ex: 5 <7, o restante pode ficar separado.

for (var i=0; i < 5; i++) {
	console.log('I:', i);
}

var s = 'AlgaWorks';	//9 caracteres.
for (var k = 0; k < s.length; k++) {
	console.log('K', k);
}

var j = 5;
for(; j < 9; j++) {
	console.log('J:', j);
}

var z = 0;
for (; z < 4;) {
	console.log('Z', z)
	z++;
}

//loop infinito
l = 0;
for (;;) {
	console.log('-->', l++);

	if (l === 101) {
		break;
	}	
}