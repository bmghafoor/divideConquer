const findRotationCount = require("./find-rotation-count");

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2);
    expect(findRotationCount([15, 18, 2, 3, 4, 5, 6, 7, 12])).toBe(2);
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4);
    expect(findRotationCount([7, 9, 11, 12, 4, 5])).toBe(4);
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0);
    expect(findRotationCount([13, 12, 11, 10, 9, 8, 1, 2, 3, 4, 5, 6])).toBe(6);
  });
});
