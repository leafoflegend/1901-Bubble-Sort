const swap = (arr, idx, idxTwo) => {
  const v1 = arr[idx];
  const v2 = arr[idxTwo];
  arr[idx] = v2;
  arr[idxTwo] = v1;
};
// const IterativebubbleSort: BubbleSort = (arrOfNumbers = []) => {
//   const copiedArrOfNumbers = arrOfNumbers.slice();
//
//   console.time('BubbleSort');
//   for (let i = copiedArrOfNumbers.length - 1; i > 0; --i) {
//     let sorted = true;
//
//     for (let j = 0; j < i; ++j) {//
//       const currentNum = copiedArrOfNumbers[j];
//       const nextNum = copiedArrOfNumbers[j + 1];
//
//       if (currentNum > nextNum) {
//         swap(copiedArrOfNumbers, j, j + 1);
//
//         sorted = false;
//       }
//     }
//
//     if (sorted) {
//       return copiedArrOfNumbers;
//     }
//   }
//
//   return copiedArrOfNumbers;
// };
const bubbleSort = (arrOfNumbers = []) => {
  const copiedArrOfNumbers = arrOfNumbers.slice();
  let sorted = true;
  for (let i = 0; i < copiedArrOfNumbers.length - 1; ++i) {
    const currentNum = copiedArrOfNumbers[i];
    const nextNum = copiedArrOfNumbers[i + 1];
    if (currentNum > nextNum) {
      copiedArrOfNumbers[i] = nextNum;
      copiedArrOfNumbers[i + 1] = currentNum;
      sorted = false;
    }
  }
  if (!sorted) {
    return bubbleSort(copiedArrOfNumbers.slice(0, -1)).concat(
      copiedArrOfNumbers[copiedArrOfNumbers.length - 1],
    );
  }
  return copiedArrOfNumbers;
};
module.exports = bubbleSort;
//# sourceMappingURL=index.js.map
