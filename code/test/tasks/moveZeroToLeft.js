function moveZeroToLeft(arr) {
  if (!arr.length) {
    return;
  }
  if (arr.length < 2) {
    return arr;
  }
  if (arr.some(x => x === 0)) {
    let zeroCounter = 0;
    const res = arr.filter(el => {
      if (el !== 0) {
        return true;
      }
      zeroCounter++;
    });
    const leadingZeros = Array(zeroCounter).fill(0);
    return leadingZeros.concat(res);
  }
  return arr;
}
module.exports = moveZeroToLeft;
