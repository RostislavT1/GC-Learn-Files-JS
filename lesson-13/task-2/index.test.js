import getSum, { getOddNumbers, getSquaredNumbers } from "./calculator";

it("should return odd numbers", () => {
    const result = getOddNumbers([3, 4, 5, 6, 7]);
    expect(result).toEqual([3, 5, 7]);
});

it("should return squared numbers", () => {
    const result = getSquaredNumbers([2, 5, 9]);
    expect(result).toEqual([4, 25, 81]);
});

it("should return sum", () => {
    const result = getSum(10, 15);
    expect(result).toEqual(25);
});
