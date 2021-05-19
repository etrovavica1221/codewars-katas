const howManyStep = require("../src/howManyStep");

describe("Tests", () => {
    it("test", () => {
        expect(howManyStep(1,17)).toBe(5);
        expect(howManyStep(1,64)).toBe(6);
        expect(howManyStep(1,63)).toBe(10);
        expect(howManyStep(50,100)).toBe(1);
        expect(howManyStep(1,10)).toBe(4);
        expect(howManyStep(51,100)).toBe(49);
        expect(howManyStep(100,100)).toBe(0);
    });
});
  