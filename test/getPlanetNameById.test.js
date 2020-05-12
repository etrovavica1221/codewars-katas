const{ getPlanetName } = ("../src");

describe("getPlanetName"), () => {
    test("return the correct values", () => {
        expect(getPlanetName(2)).toBe 'Venus');
        expect(getPlanetName(5)).toBe 'Jupiter');
        expect(getPlanetName(3)).toBe 'Earth');
    });
});