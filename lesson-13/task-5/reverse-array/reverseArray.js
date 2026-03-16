export const reverseArray = (numberArray) => {
    if (!Array.isArray(numberArray) || numberArray.length === 0) return null;
    return [...numberArray].reverse();
};

const arr = [1, 2, 3, 4];
console.log(reverseArray(arr));
