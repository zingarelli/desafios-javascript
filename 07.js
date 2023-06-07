/*
    Desafio 07 - Comparação de números
*/

const X = 10;
// const Y = 18;
const Y = -8;
// const Y = 10;

// fazendo sem return para o if/else ter mais sentido
const compareNumbers = (x, y) => {
    let resultado = '';

    if (x === y) resultado = 'igual';
    else if (x < y) resultado = 'menor';
    else resultado = 'maior';

    return resultado;
}

console.log(`${X} é ${compareNumbers(X, Y)} que ${Y}.`);