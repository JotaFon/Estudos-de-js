let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//========
isAtivo = 1;
//Converte em false
console.log(!isAtivo);

//Converte em true dependendo do contexto
console.log(!!isAtivo);

//exceçôes
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

//=============
let nome;
console.log(nome || 'Desconhecido');

nome = 'Lucas';
console.log(nome || 'Desconhecido');