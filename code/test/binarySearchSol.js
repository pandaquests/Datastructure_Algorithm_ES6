//a is sorted array
const binarySearch = function(a, key) {
  if (a.length === 0) {
    return -1;
  }
  if (a.length === 1) {
    return a[0] === key ? 0 : -1;
  }
  let startIndex = 0;
  let endIndex = a.length - 1;
  while(startIndex <= endIndex) {
    const currentIndex = (startIndex + endIndex) / 2 | 0;
    const currentKey = a[currentIndex];
    if (currentKey === key) {
      return currentIndex;
    } else if (currentKey < key) {
      startIndex = currentIndex + 1;
    } else {
      endIndex = currentIndex - 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
