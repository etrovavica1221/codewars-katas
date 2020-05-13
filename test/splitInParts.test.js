const splitInParts = require("../src/splitInParts");

describe("splitInParts", () => {
    test("split a given string into different strings of equal size", () => {
        expect(splitInParts("supercalifragilisticexpialidocious", 3)).toBe("sup erc ali fra gil ist ice xpi ali doc iou s");
        expect(splitInParts("HelloKata", 1)).toBe("H e l l o K a t a");
        expect(splitInParts("HelloKata", 9)).toBe("HelloKata");
    });
});   