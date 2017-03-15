
// Objeto: conceito de chave: valor.Pode ser alterado e incluído novos objetos dinâmicamente,
// conforme necessidade.

var fox = {cor: 'prata', modelo: 'Fox', Fabricante: 'VW'};

console.log('Fox', fox);
console.log(typeof fox);

//Acessando propriedade do objeto.

console.log('Cor do Fox:', fox.cor);

//	Pitando o carro.
fox.cor = 'Branco';
console.log("Fox depois de pintando:", fox.cor);

//Adicionar nova propriedade ao objeto.
fox.peso = '1050';
console.log('Fox com propriedade peso adicionado:',fox);

// Propriedade que não existe.
console.log('Potência do motor:', fox.potencia);	// undefined

// Adicionar nova propriedade que recebe um método.
fox.ligar = function() { console.log('Ligando o carro!')};


// Mostrar propriedades e valores dos objeto. 
console.log('Ligar o carro:', fox.ligar);	//retorna desse modo: function () { console.log('Ligando o carro!')}

fox.ligar();	// Executa a função e mostra msg ligando o carro (resultado).

// Mostrando todos os dados do FOX
console.log('Todos os dados do FOX:',fox);	//retorna chave: valores , dos objetos.
