const lifePathNumber = require("../src/lifePathNumber");

describe("Life Path Number", () => {
    test("Life Path Number - Albert Einstein", () => {
        expect(lifePathNumber("1879-03-14")).toBe(6); 
    });
    
    test("Life Path Number - Ada Lovelace", () => {
        expect(lifePathNumber("1815-12-10")).toBe(1);
    });
    
    test("Life Path Number - Brendan Eich", () => {
        expect(lifePathNumber("1961-07-04")).toBe(1); 
    });

    test("Life Path Number - Viktoriia Petrova-Kouris", () => {
        expect(lifePathNumber("1996-01-22")).toBe(3); 
    });

    test("Life Path Number - Dimitris Kouris", () => {
        expect(lifePathNumber("1991-03-18")).toBe(5); 
    });
});