const ballCollector = require("../src/monkeyTennis");

describe("Test Cases", () => {
    test("return the combined weight of just the tennis balls!", () => {
        expect(ballCollector([58, 68, 62, 69, 58])).toEqual({ weight: 116 });
        expect(ballCollector([60,66,71,68,62])).toEqual({ weight: 0 });
        expect(ballCollector([58])).toEqual({ weight: 58 });
    });
});