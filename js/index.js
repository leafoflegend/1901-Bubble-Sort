const bubbleSort = numbers => {
  let unsorted = false;
  const copiedNumbers = numbers.slice();
  for (let i = 0; i < copiedNumbers.length - 1; ++i) {
    const currentNum = copiedNumbers[i];
    const nextNum = copiedNumbers[i + 1];
    if (currentNum > nextNum) {
      unsorted = true;
      copiedNumbers[i] = nextNum;
      copiedNumbers[i + 1] = currentNum;
    }
  }
  if (unsorted) return bubbleSort(copiedNumbers);
  return copiedNumbers;
};
module.exports = bubbleSort;
//# sourceMappingURL=index.js.map
