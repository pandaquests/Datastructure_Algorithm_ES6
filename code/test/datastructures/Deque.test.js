const Queue = require('../../datastructures/Queue');
const Deque = require('../../datastructures/Deque');
test('Test init Deque', () => {
	const myDeque = new Deque();
	expect(myDeque.size()).toBe(0);
	const arr = [1,2,3];
	arr.forEach(x => myDeque.addLast(x));
	expect(myDeque.peekLast()).toBe(3);
	myDeque.removeLast();
	expect(myDeque.peekLast()).toBe(2);
	myDeque.addFirst(0);
	expect(myDeque.peekFirst()).toBe(0);
	myDeque.removeFirst();
	expect(myDeque.peekFirst()).toBe(1);
});


test('Test remove first occurrence', () => {
	const myDeque = new Deque();
	const arr = [11,99,22,11,33,99];
	const arrSize = arr.length;
	arr.forEach(x => myDeque.addLast(x));

	expect(myDeque.size()).toBe(arrSize);
	myDeque.removeFirstOccurrence(11);
	expect(myDeque.size()).toBe(arrSize - 1);
	expect(myDeque.peekFirst()).toBe(99);
});

test('Test remove last occurrence', () => {
	const arr = [11,99,22,11,33,99];
	const myDeque = new Deque(arr);
	const orgSize = myDeque.size();
	myDeque.removeLastOccurrence(99);
	expect(myDeque.size()).toBe(orgSize - 1);
	expect(myDeque.peekLast()).toBe(33);
});


test('Test if element is in Dequee', () => {
	const arr = [11,99,22,11,33,99];
	const myDeque = new Deque(arr);
	expect(myDeque.contains(33)).toBe(true);
	expect(myDeque.contains(333)).toBe(false);
});

test('Get iterator in ascending order', () => {
	const arr = [11,99,22,11];
	const myDeque = new Deque(arr);
	const iter = myDeque.iterator();
	let result = iter.next();
	let ind = 0;
	while(!result.done) {
		expect(result.value).toBe(arr[ind++]);
		result = iter.next();
	}
});


test('Get iterator in descending order', () => {
	const arr = [11,99,22,11];
	const myDeque = new Deque(arr);
	const iter = myDeque.descendingIterator();
	let result = iter.next();
	let ind = arr.length - 1;
	while(!result.done) {
		expect(result.value).toBe(arr[ind--]);
		result = iter.next();
	}
});


