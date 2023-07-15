/*
    Desafio 26 - Média de elementos do array
*/

const arr1 = [1, 3, 5, 6, 2, 4, 10]
const arr2 = [2, 2, 2, 2, 2]

function average(arr) {
    const sum = arr.reduce((sum, currentValue) => sum + currentValue)
    return sum / arr.length;
}

console.log(average(arr1).toFixed(2));
console.log(average(arr2).toFixed(2));