

const bubbleSort = require('../src/index');

describe('BubbleSort', () => {
  test('bubbleSort is in fact a function', () => {
    expect(typeof bubbleSort).toEqual('function');
  });

  test('bubbleSort returns an array', () => {
    expect(Array.isArray(bubbleSort())).toEqual(true)
  });

  test('bubbleSort moves the largest number to the rightmost side', () => {
    expect(bubbleSort([3, 2, 1])[2]).toEqual(3);
  });

  test('bubbleSort sorts a non sorted array', () => {
    expect(bubbleSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('bubbleSort sorts a non sorted array that is large', () => {
    let someArray: number[] = [];
    someArray.length = 10000000;
    someArray = someArray.map(() => {
      return Math.random() * 100000;
    });

    const sortedArray = someArray.slice();
    sortedArray.sort();

    expect(bubbleSort(someArray)).toEqual(sortedArray);
  });
});
