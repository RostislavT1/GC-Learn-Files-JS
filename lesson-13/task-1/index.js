export const getEvenNumber = (array) =>
    array.filter((number) => number % 2 === 0);

console.log(getEvenNumber([3, 5, 6, 7, 8, 10]));
