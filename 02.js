/*
    Desafio 02 - Cálculo IMC 
*/

const readline = require('readline'); // para interação com usuário

const getIMC = (weight, height) => {
    return weight / (height*height);
}

// sim... está feio, mas eu só quero criar uma interação básica via linha de comando
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor do peso: ', (value1) => {
    const weight = parseFloat(value1);
    rl.question('Digite o valor da altura:', (value2) => {
        const height = parseFloat(value2);  
        console.log(`O valor do IMC é ${getIMC(weight, height).toFixed(2)}`);
        rl.close();
    });
});