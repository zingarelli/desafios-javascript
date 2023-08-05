/*
    Desafio 41 - Execução condicional com callbacks
*/

function verifyAndExecute(validate, fulfill, reject) {
    if (validate()) return fulfill();
    return reject();
}

const validIntegers = (x, y) => { return Number.isInteger(x) && Number.isInteger(y) }
const add = (x, y) => { return x + y }
const concatenate = (x, y) => { return `${x} and ${y}` }

const num1 = "5", 
    num2 = "6", 
    char1 = 'hello', 
    char2 = 'goodbye';

console.log(verifyAndExecute(
    () => validIntegers(num1, num2), 
    () => add(num1, num2),
    () => concatenate(char1, char2)
))

const x = 10, y = 2;
// const x = '10', y = '2';
verifyAndExecute(
    () => validIntegers(x, y),
    () => console.log(`${x} * ${y} = ${x*y}`),
    () => console.log(`Strings '${x}' and '${y}'`)
)