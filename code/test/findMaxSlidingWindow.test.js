const findMaxSlidingWindow = require('./findMaxSlidingWindow');

test('Mathc 1', () => {
  expect(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5],4)).toEqual([4,4,4,4,3,5]);
});


test('Mathc 1', () => {
  expect(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5],3)).toEqual([3,4,4,4,3,2,5]);
});


test('Mathc 1', () => {
  expect(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5],5)).toEqual([4,4,4,4,5]);
});


test('Mathc 1', () => {
  expect(findMaxSlidingWindow([1,2,3,4,5,6,7,8,9,10],3)).toEqual([3,4,5,6,7,8,9,10]);
});

test('Mathc 1', () => {
  expect(findMaxSlidingWindow([10,6,9,-3,23,-1,34,56,67,-1,-4,-8,-2,9,10,34,67],3)).toEqual([10,9,23,23,34,56,67,67,67,-1,-2,9,10,34,67]);
});
