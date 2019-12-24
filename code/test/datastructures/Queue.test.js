const Queue = require('../../datastructures/Queue');

test('Test init Queue', () => {
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
