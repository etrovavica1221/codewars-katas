const derive = require("../src/takeTheDerivative");

describe("derivative", () => {
    test(" function should multiply the two numbers, and then subtract 1",() => {
        expect(derive(7,8)).toBe("56x^7");
        expect(derive(5,9)).toBe("45x^8");
    });
});