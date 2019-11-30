const moveZeroToLeft = require('./moveZeroToLeft');

test('contains no element', () => {
  expect(moveZeroToLeft([])).toStrictEqual(undefined);
});

test('contains only a 0 element', () => {
  expect(moveZeroToLeft([0])).toStrictEqual([0]);
});

test('contains only a non 0 element', () => {
  expect(moveZeroToLeft([1])).toStrictEqual([1]);
});

test('contains more than one element with a 0', () => {
  expect(moveZeroToLeft([1, 0])).toStrictEqual([0, 1]);
});

test('contains more than one element without 0', () => {
  expect(moveZeroToLeft([1, 3])).toStrictEqual([1, 3]);
});

test('contains more than one element with a 0 somewhere in the middle', () => {
  expect(moveZeroToLeft([1, 0, 3])).toStrictEqual([0, 1, 3]);
});

test('contains random number of zeros and non-zero elements', () => {
  expect(moveZeroToLeft([1, 0, 3, 0, 0, 44, 1, 0, 2])).toStrictEqual([0, 0, 0, 0, 1, 3, 44, 1, 2]);
});
