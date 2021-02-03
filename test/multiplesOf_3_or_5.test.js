const solution = require("../src/multiplesOf_3_or_5");

describe("multiplesOf_3_or_5", () => {
  test("that solution returns the sum of all the multiples of 3 or 5 below the number passed i", () => {
    expect(solution(10)).toBe(23);
  });
});