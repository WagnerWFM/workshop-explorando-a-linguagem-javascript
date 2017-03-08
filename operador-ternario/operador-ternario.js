// Operador TERNÁRIO: recomendado para condição simples conforme exemplo abaixo.

var temFoto = true;
var pathFoto = '';

/*
if (temFoto) {
	pathFoto = 'maria-perfil.jpg';
} else {
	pathFoto = 'mock-perfil.jpg';
}
*/

// Em uma linha utilizando operador TERNÁRIO..
pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';


console.log('Path da foto:', pathFoto);