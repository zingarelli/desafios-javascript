/*
    Desafio 05 - Verificação de divisibilidade
*/

const x = 10;
// const x = 9;
const y = 2;

const isDivisible = (x, y) => x % y === 0;

isDivisible(x, y) 
    ? console.log(`${x} é divisível por ${y}`)
    : console.log(`${x} NÃO é divisível por ${y}`);