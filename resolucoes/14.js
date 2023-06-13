/*
    Desafio 14 - Sequência de Fibonacci
*/
function fibonacci(x) {
    if (x < 0) throw new Error ('Foi digitado um valor negativo');

    if (x === 0) return 0;

    if (x === 1) return 1;

    return (fibonacci(x-2) + fibonacci(x-1));
}

function showFibonacci(x) {
    if (x < 0) {
        console.log('Por favor, entre com um número maior que zero');
        return;
    }
    
    let i = 0;
    const list = [];

    while (fibonacci(i) <= x) {
        list.push(fibonacci(i));
        i++;
    }

    console.log(list.join(', '));
}

const N = 500;
showFibonacci(N);