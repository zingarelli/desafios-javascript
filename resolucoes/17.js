/*
    Desafio 17 - Max/Min
*/

function max(x, y) {
    return x > y ? x : y;
}

function min(x, y) {
    return x < y ? x : y;
}

const test_1 = [2, 9];
const test_2 = [-95, -95];
const test_3 = [8, 3];

console.log(`O maior valor entre ${test_1[0]} e ${test_1[1]} é ${max(test_1[0], test_1[1])}`);
console.log(`O menor valor entre ${test_1[0]} e ${test_1[1]} é ${min(test_1[0], test_1[1])}`);
console.log(`O maior valor entre ${test_2[0]} e ${test_2[1]} é ${max(test_2[0], test_2[1])}`);
console.log(`O menor valor entre ${test_2[0]} e ${test_2[1]} é ${min(test_2[0], test_2[1])}`);
console.log(`O maior valor entre ${test_3[0]} e ${test_3[1]} é ${max(test_3[0], test_3[1])}`);
console.log(`O menor valor entre ${test_3[0]} e ${test_3[1]} é ${min(test_3[0], test_3[1])}`);