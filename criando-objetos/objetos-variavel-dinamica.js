var pessoa = {nome:'Pedro', idade:'21', sexo:'Masculino'};

console.log('Dados da Pessoa:', pessoa);

// Lendo uma propriedade do objeto pessoa de forma dinâmica. Obtem o valor de um combobox por exemplo.
var x = 'nome'
console.log('Nome:', pessoa[x]);

// altera nome da variável 'x'.
x = 'idade';
console.log('Idade:', pessoa[x]);

// Pode-se usar uma string também.
console.log('Sexo:', pessoa['sexo']);

//ou pelo ponto.
console.log('Sexo:', pessoa.sexo);