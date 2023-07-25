/*
    Desafio 39 - Temporizador personalizado
*/

function executeAfterTimer(seconds, callback) {
    console.log('wait for it...');
    setTimeout(callback, seconds*1000);
}

executeAfterTimer(2, () => console.log('callback was called'));