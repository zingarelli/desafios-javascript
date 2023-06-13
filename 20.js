/*
    Desafio 20 - Palíndromo
*/

//usando a função criada no exercício 18
const reverse = require("./18");

function isPalindrome(str) {
    return str.toLowerCase() === reverse(str);
}

console.log(`"aEiOuoieA" ${isPalindrome('aEiOuoieA') ? '' : ' não '} é palíndromo.`);
console.log(`"Amor" ${isPalindrome('amor') ? '' : ' não '} é palíndromo.`);
console.log(`"Roma é amor" ${isPalindrome('Roma é amor') ? '' : ' não '} é palíndromo.`);