import { getEvenNumber } from "./index.js";

it("should return even numbers", () => {
    const result = getEvenNumber([1, 3, 4, 5, 6]);

    expect(result).toEqual([4, 6]);
});

it("17 equal 17", () => {
    expect(17).toEqual(17);
});

it("18 not equal 17", () => {
    expect(18).not.toEqual(17);
});
