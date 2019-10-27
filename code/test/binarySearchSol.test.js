const binarySearch = require('./binarySearchSol.js');

let array_for_binary_search = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];

test('find 47', () => {
  expect(binarySearch(array_for_binary_search, 47)).toBe(2);
});


test('find 75', () => {
  expect(binarySearch(array_for_binary_search, 75)).toBe(5);
});


test('find something that doesn\'t exist', () => {
  expect(binarySearch(array_for_binary_search, 175)).toBe(-1);
});

