export const getSquaredNumbers = (array) =>
    array.map((number) => number * number);

export const getOddNumbers = (array) =>
    array.filter((number) => number % 2 === 1);

export default (num1, num2) => num1 + num2;
