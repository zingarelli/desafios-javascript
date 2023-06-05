/*
    Desafio 01 - Conversão de temperatura 
*/

const readline = require('readline'); // para interação com usuário

//--- Funções de conversão
const celsiusToFahrenheit = (temperature) => {
    return (temperature * 9/5) + 32;
}

const fahrenheitToCelsius = (temperature) => {
    return (temperature - 32) * 5/9;
}

//--- Teste direto na linha de comando

// código do readline criado pela ChatGPT
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um valor de temperatura: ', (temperature) => {
    console.log(`${temperature}ºC é equivalente a ${celsiusToFahrenheit(parseFloat(temperature)).toFixed(2)}ºF`);
    
    console.log(`${temperature}ºF é equivalente a ${fahrenheitToCelsius(parseFloat(temperature)).toFixed(2)}ºC`);
    rl.close();
})