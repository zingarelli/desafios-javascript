/*
    Desafio 04 - Cálculo de área e perímetro 
*/

const length = 30;
const width = 12;

const getArea = (length, width) =>  length * width;
const getPerimeter = (length, width) => (length + width) * 2;

console.log(`
    O retângulo possui ${length}cm de comprimento e ${width}cm de altura.
    Sua área é de ${getArea(length, width)}cm².
    Seu perímetro é de ${getPerimeter(length, width)}cm.
`)