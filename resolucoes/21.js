/*
    Desafio 20 - Array de números aleatórios
*/

function randomNumbersArray(quantity, min, max) {
    const randomArray = []

    for (let i = 0; i < quantity; i++) {
        randomArray.push(Math.floor(min + Math.random() * max))
    }

    return randomArray;
}

// console.log(randomNumbersArray(10, 0, 10))
// console.log(randomNumbersArray(50, 1, 3))

module.exports = randomNumbersArray