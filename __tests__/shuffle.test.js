const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('Shuffle returns an array', () => {
    expect(Array.isArray(shuffle())).toBe(true);
  },
  test('Array returned is same length as arguement', () => {
    let example = [1,2,3,4,5]
    expect(example.length).toEqual(shuffle(example).length);
  })
  )
});
