const Queue = require('../../datastructures/Queue');
const Deque = require('../../datastructures/Deque');
test('Test init Deque', () => {
	const myDeque = new Deque();
	expect(myDeque.size()).toBe(0);
	const arr = [1,2,3];
	arr.forEach(x => myDeque.addLast(x));
	expect(myDeque.getLast()).toBe(3);
	myDeque.removeLast();
	expect(myDeque.getLast()).toBe(2);
	myDeque.addFirst(0);
	expect(myDeque.getFirst()).toBe(0);
	myDeque.removeFirst();
	expect(myDeque.getFirst()).toBe(1);
});


test('Test remove first occurrence in Deque', () => {
	const myDeque = new Deque();
	const arr = [11,99,22,11,33,99];
	arr.forEach(x => myDeque.addLast(x));
	myDeque.removeFirstOccurrence(11);

});


// ----------------------
test('Test init Deque', () => {
	const myQueue = new Queue();

	const arr = [1,2,3];
	arr.forEach(x => myQueue.add(x));
	expect(myQueue.peek()).toBe(3);
});
test('Test remove element', () => {
	const myQueue = new Queue();
	expect(myQueue.peek()).toBe(undefined);
	const arr = [1,3];
	arr.forEach(x => myQueue.add(x));
	expect(myQueue.remove()).toBe(3);
	expect(myQueue.peek()).toBe(1);
});
