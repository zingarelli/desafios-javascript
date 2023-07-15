/*
    Desafio 22 - Elemento mais frequente
*/

const randomNumbersArray = require("./21");

function mostFrequentElement(array) {
    // sort array
    array.sort();

    // start the variables with the first element in the array
    let mostFrequent = array[0];
    let currentElementInpected = array[0];
    let currentFrequency = 1;
    let biggestFrequency = 1;

    for (let i = 1; i < array.length; i++) {
        const element = array[i];        
        if (element === currentElementInpected) {
            currentFrequency++;
        } else {            
            if (biggestFrequency < currentFrequency) {
                // update biggest frequency
                biggestFrequency = currentFrequency;
                mostFrequent = currentElementInpected;
            }
            // restart the count for the new element
            currentFrequency = 1;
            currentElementInpected = element;
        }
        // DEBUG
        // console.log(`
        //     i = ${i},
        //     mostFrequent = ${mostFrequent},
        //     currentElementInspected = ${currentElementInpected},
        //     currentFreq = ${currentFrequency}
        //     biggestFre = ${biggestFrequency}
        //     element = ${element}
        // `)
    }
    return [mostFrequent, biggestFrequency];
}

// const test = [0, 0, 10, 2, 4, 0, 2, 0, 3, 0, 2, 2];
// const test = [0, 0, 0, 2, 2, 2, 2, 3];
const test = [0, 0, 10, 2, 4, 0, 2, 0, 3, 0, 2, 2, 2, 2, 2];
const chatGPTProvidedThis = [15, 14, 20, 24, 18, 23, 12, 26, 19, 16, 27, 13, 25, 21, 17, 22, 12, 27, 14, 19, 16, 23, 15, 18, 24, 13, 26, 20, 17, 21, 25, 22, 27, 14, 12, 19, 16, 18, 13, 23, 15, 24, 20, 26, 17, 21, 22, 25, 27, 14, 19, 16]
const usingLastExercise = randomNumbersArray(100, 7, 16)

console.log(usingLastExercise.sort());
const [element, frequency] = mostFrequentElement(usingLastExercise);

console.log(`O elemento mais frequente no array é ${element}. Ele aparece ${frequency} vezes`);