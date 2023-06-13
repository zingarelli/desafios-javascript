/*
    Desafio 13 - Padrão de asteriscos
*/
function showPattern(x) {
    for (let i = 1; i <= x; i++) {
        console.log('*'.repeat(i));
    }
}

function showReversePattern(x) {
    for (let i = x; i > 0; i--){
        console.log('*'.repeat(i));
    }
}

function showFullPattern(x) {
    showPattern(x);
    showReversePattern(x-1);
}

const N = 4;
showPattern(N);
showReversePattern(N);
showFullPattern(N);