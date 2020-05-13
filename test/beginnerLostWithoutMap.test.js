const maps = require("../src/beginnerLostWithoutMap");

describe("Example tests",()=>{
    test("return a new array with each value doubled",() => {
      expect(maps([1, 2, 3])).toEqual([2, 4, 6]);
      expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8]); 
      expect(maps([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4]); 
    });
  });