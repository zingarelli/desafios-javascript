/*
    Desafio 27 - Soma dos valores de um objeto
*/

// object created by Chat GPT
const obj = {
    "age": 32,
    "height": 176,
    "weight": 68,
    "score": 87,
    "temperature": 23
};

const obj2 = {
    oi: 1,
    tudo: 2,
    bem: 3
};

function sum(object) {
    let sum = 0;
    for (const prop in object) {
        sum += object[prop];
    }
    return sum;
}

console.log(sum(obj));
console.log(sum(obj2));