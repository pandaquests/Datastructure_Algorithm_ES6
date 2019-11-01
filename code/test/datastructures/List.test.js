const List = require('../../datastructures/List');

test('Test init empty array', () => {
  const myList = new List();
  expect(myList.store.length).toBe(0);
  expect(myList.pos).toBe(0);
  expect(myList.store).toStrictEqual([]);
});

test('Test init filled array', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.store.length).toBe(4);
  expect(myList.pos).toBe(0);
  expect(myList.store).toStrictEqual([1,2,3,4]);
});

test('clear array', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.store).toStrictEqual([1,2,3,4]);
  myList.clear();
  expect(myList.store).toStrictEqual([]);
});

test('to string', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.toString()).toStrictEqual('1,2,3,4');
});

test('get item', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.get(1)).toBe(2);
  expect(myList.get()).toBe(1);
});

test('index of ', () => {
  const myList = new List([1,2,3,4,3]);
  expect(myList.indexOf(3)).toBe(2);
});

test('last index of ', () => {
  const myList = new List([1,2,3,4,3]);
  expect(myList.lastIndexOf(3)).toBe(4);
});

test('is empty ', () => {
  const myList = new List();
  expect(myList.isEmpty()).toBeTruthy();
});

test('is empty ', () => {
  const myList = new List([1,2,3,4]);
  myList.insert(99, 1);
  expect(myList.store).toStrictEqual([1,99,2,3,4]);
});

test('append item ', () => {
  const myList = new List([1,2,3,4]);
  myList.add(99);
  expect(myList.lastIndexOf(99)).toBe(myList.store.length - 1);
});

test('remove item ', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.store.length).toBe(4);
  myList.remove(0);
  expect(myList.store.length).toBe(3);
});

test('set pos to front ', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.pos).toBe(0);
  expect(myList.next()).toBe(1);
  expect(myList.front());
  expect(myList.pos).toBe(0);
  expect(myList.end());
  expect(myList.pos).toBe(myList.store.length - 1);
  expect(myList.prev());
  expect(myList.pos).toBe(myList.store.length - 2);
  expect(myList.moveTo(3));
  expect(myList.pos).toBe(3);
});

test('set pos to front ', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.moveTo(99));
  expect(myList.pos).toBe(3);
  expect(myList.moveTo(-99));
  expect(myList.pos).toBe(0);
  expect(myList.moveTo(2));
  expect(myList.pos).toBe(2);
});

test('sublist ', () => {
  const myList = new List([1,2,3,4]);
  expect(myList.sublist(1,3)).toStrictEqual([2,3]);
});
