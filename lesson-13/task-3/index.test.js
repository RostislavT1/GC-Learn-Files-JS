import getMinSquaredNumber from "./getMinSquaredNumber";

it("should return min absolute squared number", () => {
    const result = getMinSquaredNumber([5, -3, -10, 4, 12]);
    expect(result).toEqual(9);
});

it("should return null because parameter not array", () => {
    const result = getMinSquaredNumber("5, 3");
    expect(result).toEqual(null);
});

it("should return null because empty array", () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});
