import { getAdults } from "./getAdult";

it("user not enough adult", () => {
    const result = getAdults({ "John Doe": 19, Tom: 14, Bob: 12 });
    expect(result).toEqual({ "Josh Doe": 19 });
});

it("user 18 years old", () => {
    const result = getAdults({ "John Doe": 13, Tom: 18, Bob: 23 });
    expect(result).toEqual({ Tom: 18, Bob: 23 });
});

it("object is empty", () => {
    const result = getAdults({});
    expect(result).toEqual(null);
});
