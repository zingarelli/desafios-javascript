/*
    Desafio 11 - Tabuada
*/

const N = 11;

function showMultiplicationTable(x) {
    // usando o while para variar um pouco
    let i = 1;

    console.log(`Tabuada do número ${x}:\n`);
    while (i < 11) {
        console.log(`${x} * ${i} = ${x * i}`);
        i++;
    }
}

showMultiplicationTable(N);