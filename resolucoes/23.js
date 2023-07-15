/*
    Desafio 23 - Remoção de elementos repetidos
*/

// const chatGPTProvidedThis = [
//     'apple', 'banana', 'orange', 'apple', 'grape',
//     'kiwi', 'apple', 'mango', 'orange', 'pear',
//     'banana', 'apple', 'grape', 'kiwi', 'orange',
//     'apple', 'mango', 'banana', 'orange', 'grape'
// ]

const chatGPTProvidedThis = [
    'apple', 'banana', 'orange', 'grape', 'kiwi',
    'mango', 'pear', 'peach', 'plum', 'strawberry',
    'watermelon', 'blueberry', 'cherry', 'pineapple', 'lemon',
    'lime', 'raspberry', 'blackberry', 'pomegranate', 'apricot',
    'coconut', 'fig', 'guava', 'honeydew', 'mandarin',
    'nectarine', 'papaya', 'passionfruit', 'persimmon', 'quince',
    'rhubarb', 'tangerine', 'cantaloupe', 'dragonfruit', 'elderberry',
    'gooseberry', 'kumquat', 'lychee', 'mulberry', 'olive',
    'pawpaw', 'plantain', 'soursop', 'ugli', 'yuzu',
    'zucchini', 'avocado', 'tomato', 'potato', 'carrot',
    'apple', 'banana', 'orange', 'grape', 'kiwi'
];

const test = ['Matheus', 'Matheus', 'Matheus', 'Matheus', 'Matheus', 'Ricardo', 'Matheus', 'Matheus', 'Matheus', 'Matheus', 'Ricardo', 'Matheus', 'Ricardo', 'Ricardo', 'Zingarelli', 'Matheus', 'Ricardo', 'Uihara', 'Zingarelli', 'Maatheus'];

function removeDuplicates(arr) {
    // backward search for the same item 
    // if the index is the same, the item is not repeated
    return arr.filter((item, index) => arr.lastIndexOf(item) === index)
}

// gabarito do instrutor, transformando em um Set e depois em um array novamente
function removeDuplicatesUsingSet(arr) {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates(chatGPTProvidedThis));
console.log(removeDuplicates(test));
console.log(removeDuplicatesUsingSet(chatGPTProvidedThis));
console.log(removeDuplicatesUsingSet(test));