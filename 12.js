/*
    Desafio 12 - Números primos
*/
function showPrimeNumbers(x) {
    const primes = [];
    
    // 1 não é primo
    for (let i = 2; i <= x; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    console.log(`Números primos até ${x}: ${primes.join(', ')}`);
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return true;
}

const N = 50;
showPrimeNumbers(N);