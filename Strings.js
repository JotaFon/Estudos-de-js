const escola = "Positivo";
//Controle de caracteres
console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('t'));

//Subtrair caracteres
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

//Adicionar caracteres ou substituir
console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + (escola) + ('!'));
console.log(escola.replace('o', 0));

//Convertendo string em array
console.log('Ana,Maria,Pedro'.split(','));

//=======Template Strings============
const nome = 'Rebeca';
const template = `Olá ${nome}!`;
console.log(template);

//expressoes
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);