/*
    Desafio 29 - União de propriedades de objetos
*/

// objects created by Chat GPT
const person = {
    age: 32,
    height: 176,
    weight: 68,
    score: 87,
    temperature: 23
};

const address = {
    street: '123 Main St',
    city: 'Exampleville',
    state: 'Samplestate',
    zip: '12345',
    country: 'Sampleland',
    temperature: 32
};

function concatenateObjects(obj1, obj2) {
    return {...obj1, ...obj2}; 
}

console.log(concatenateObjects(person,address));