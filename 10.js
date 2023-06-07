/*
    Desafio 10 - Somatório de 1 a n
*/

const N = 44;

function getSum(x){
    let sum = 0;
    
    for (let i = 1; i <= x; i++) {
        sum += i;
    }

    return sum;
}

console.log(`O resultado da soma de 1 até ${N} é ${getSum(N)}`);