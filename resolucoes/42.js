/*
    Desafio 42 - Simulação resposta API
*/

function fakeAPI(value, delay) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

async function callAPI() {
    const value = await(fakeAPI(4, 2000));  
    console.log(value);
}

console.log(fakeAPI(4, 2)); // Promise { <pending> }

callAPI(); // 4

fakeAPI(5, 4000)
    .then(result => console.log(result)) // 5