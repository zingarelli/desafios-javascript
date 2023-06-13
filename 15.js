/*
    Desafio 15 - Par ou ímpar
*/

function isEven(x) {
    return (x % 2 === 0);
}

const numbers = [2, 29, 67, 53, 10987730]
for (let i = 0; i < 5; i++) {
    if (isEven(numbers[i])) {
        console.log(`O número ${numbers[i]} é par.`);
    } 
    else {
        console.log(`O número ${numbers[i]} é ímpar.`);
    }
}