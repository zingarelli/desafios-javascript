/*
    Desafio 40 - Clone do map()
*/

function transformArray(arr, callback) {
    const newArr = [];
    arr.forEach(item => newArr.push(callback(item)));
    return newArr;
}

const array = [1, 2, 3, 4];

// array with values squared
const newArray = transformArray(array, (value) => value * value);

// array with all elements = banana
const bananArray = transformArray(array, () => 'banana')

console.log(array);
console.log(newArray);
console.log(bananArray);
//original array is not modified
console.log(array);
