const XO = require("../src/Exes and Ohs");

describe("XO", () => {
    test("Check to see if a string has the same amount of 'x's and 'o's", () => {    
        expect(XO('xo')).toBe(true);
        expect(XO("xxOo")).toBe(true);
        expect(XO("xxxm")).toBe(false);
        expect(XO("Oo")).toBe(false);
        expect(XO("ooom")).toBe(false);
    });
});