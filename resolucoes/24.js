/*
    Desafio 24 - Concatenar arrays
*/

const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]
const arr3 = ['casa', 'asa', 'boca']
const arr4 = ['olho', 'sogro', 'menta']

function concatenate(arr1, arr2) {
    return ([...arr1, ...arr2])
}

function concatenateWithConcat(arr1, arr2) {
    return (arr1.concat(arr2))
}

console.log(concatenate(arr1, arr2));
console.log(concatenate(arr3, arr4));
console.log(concatenate(arr1, arr3));

// Estranho quando há um array aninhado...
const test1 = [0, 1, [2], 3]
const test2 = [4, 5]
const withSpread = concatenate(test1, test2)
const withConcat = concatenateWithConcat(test1, test2)
console.log(withSpread);
console.log(withConcat);

// OK, não atualiza o array concatenado
test1.push(7)
console.log(withSpread);
console.log(withConcat);

// Aqui ele atualiza o array concatenado. Por quê?
// somente o test1[2].push(7) foi colocado no array concatenado. Por quê?
console.log(test1)
test1[2].push(7)
console.log(test1)
console.log(withSpread);
console.log(withConcat);