const removeChar = require("../src/removeFirstAndLast");

describe("Tests", () => {
    test("removes the first and last characters of a string", () => {
        expect(removeChar('eloquent')).toBe('loquen');
        expect(removeChar('country')).toBe('ountr');
        expect(removeChar('person')).toBe('erso');
        expect(removeChar('place')).toBe('lac');
    });   
});
