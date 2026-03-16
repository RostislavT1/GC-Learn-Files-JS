import { reverseArray } from "./reverseArray.js";

it("should return reserved array", () => {
    const result = reverseArray([1, 2, 3, 4]);
    expect(result).toEqual([4, 3, 2, 1]);
});

it("should return null if not array", () => {
    const result = reverseArray(1, 2, 3, 4);
    expect(result).toEqual(null);
});

it("should return null if array empty", () => {
    const result = reverseArray([]);
    expect(result).toEqual(null);
});
