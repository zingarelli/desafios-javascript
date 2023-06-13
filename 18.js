/*
    Desafio 18 - Inversão de string
*/

// achei elegante, haha
function reverse(str) {
    return str.toLowerCase().split('').reverse().join('');
}

function runProgram() {
    const words = ['Roma', 'onomatopeia', '000111', 'abcdefg', 'subi no onibus'];
    
    for (let i = 0; i < words.length; i++) {
        console.log(`O reverso de ${words[i].toLowerCase()} é ${reverse(words[i])}`);
        
    }
}


// exportando a função para ser usada no exercício 20
module.exports = reverse;


// descomente para rodar esse desafio
// runProgram();