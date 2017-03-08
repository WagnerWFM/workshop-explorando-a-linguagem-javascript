
//Tipos boolean

//Valores que são 'false' no JavaScript.
//Explicação: 0 sem nada atribuido é false, !0 fica true e !!0 fica false. Para saber se o número ou string (no caso vazia é false)
// é false ou true basta usar duas negação. A primeira negação muda o estado iriginal e a segunda faz voltar ao estado original.


// Sempre serão falsos no JavaScript. Negando duas vezes consiguimos obter o valor se é true ou false:
console.log('01 - ',  !!0);	// 0 false. Qualquer número diferente de 0 é true, seja negativo ou positivo.
console.log('02 - ',  !!''); // string vazia é false.
console.log('03 - ',  !!NaN);	// Not a number.
console.log('04 - ',  !!null);
console.log('05 - ',  !!false);
