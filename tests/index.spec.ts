const bubbleSort = require('../src/index');

describe('BubbleSort', () => {
  test('Properly sorts simple cases', () => {
    expect(bubbleSort([1, 4, 2, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
