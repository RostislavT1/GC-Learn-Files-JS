import { withdraw } from "./withdraw";

it("return left balance if money enough", () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1300);
    expect(result).toEqual(100);
});

it("return -1 if money not enough", () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 1500);
    expect(result).toEqual(-1);
});

it("return -1 if amount not number", () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', "1200");
    expect(result).toEqual(-1);
});
