
//Tipos boolean

//Valores que são 'false' no JavaScript.
//Explicação: 0 sem nada atribuido é false, !0 fica true e !!0 fica false. Para saber se o número ou string (no caso vazia é false)
// é false ou true basta usar duas negação. A primeira negação muda o estado iriginal e a segunda faz voltar ao estado original.


// Sempre serem falsos no JavaScript:
console.log('01 - ',  !!0);	// 0 false, nega duas vezes volta o valor normal para saber se é true ou false se usar função.
console.log('02 - ',  !!''); // string vazia é false.
console.log('03 - ',  !!NaN);	// Not a number.
console.log('04 - ',  !!null);
console.log('05 - ',  !!false);
