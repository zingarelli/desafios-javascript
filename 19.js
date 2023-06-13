/*
    Desafio 19 - Contagem de vogais
*/

// g: todas as ocorrências
// i: case insensitive
function countVowels(str) {
    // repare no uso do ? para tratar retorno null
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    const count = str.match(/[aeiou]/gi)?.length;
    if (count) return count;
    return 0;
}

const texto = "A eiou aei ou ae Io U aeio U. BBBBB."
console.log(`Quantidade de vogais no texto "${texto}": ${countVowels(texto)}`);