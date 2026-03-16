import { calc } from "./calculator";

it("should return sum of numbers", () => {
    const result = calc("5 + 8");
    expect(result).toEqual("5 + 8 = 13");
});

it("should return difference of numbers", () => {
    const result = calc("29 - 8");
    expect(result).toEqual("29 - 8 = 21");
});

it("should return product of numbers", () => {
    const result = calc("6 * 9");
    expect(result).toEqual("6 * 9 = 54");
});

it("should return fraction of numbers", () => {
    const result = calc("64 / 4");
    expect(result).toEqual("64 / 4 = 16");
});

it("should null if not string", () => {
    const result = calc(15 * 4);
    expect(result).toEqual(null);
});
