function binarySearch(array, val) {
  'use strict';

  let minimumIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;

  (function search() {
    currentIndex = Math.floor((minimumIndex + maxIndex) / 2);
    console.log(`curently looking between ${array[minimumIndex]} and ${array[maxIndex]}`);
    (array[currentIndex] === val) ? console.log(`FOUND IT! ${val} == ${array[currentIndex]}`): (val > array[currentIndex]) minimumIndex = currentIndex + 1 ? (val < array[currentIndex]) : maxIndex = currentIndex - 1
    search();
  })();
}

module.exports = {
  binarySearch
};


const binarytree = (array, val) =>
  (minimumIndex = 0, maxIndex = array.length - 1, currentIndex) => currentIndex = Math.floor((
    minimumIndex + maxIndex
  ) / 2)
