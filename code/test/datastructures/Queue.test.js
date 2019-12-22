const Stack = require('../../datastructures/Stack');

const Queue = require('../../datastructures/Queue');

test('Test init Queue', () => {
	const myQueue = new Queue();
	const arr = [1,2,3];
	arr.forEach(x => myQueue.add(x));
	expect(myQueue.peek()).toBe(1);

});
// ----------------------
//
test('Test init empty array', () => {
	const myStack = new Stack();

	expect(myStack.empty()).toBe(true);
});

test('Test push and pop an element', () => {
	const myStack = new Stack();
	const num = 1;
	myStack.push(num);
	expect(myStack.empty()).toBe(false);	
	expect(myStack.pop()).toBe(num);
	expect(myStack.empty()).toBe(true);
});
test('Test peek', () => {
	const myStack = new Stack();
	expect(myStack.empty()).toBe(true);
	expect(myStack.peek()).toBe(undefined);
	const num = 2;
	myStack.push(num);
	expect(myStack.empty()).toBe(false);
	expect(myStack.peek()).toBe(num);
});
test('Test search', () => {
	const myStack = new Stack();
	const nums = [1,2,3,2,0,4];
	nums.forEach(n => myStack.push(n));

	expect(myStack.search(4)).toBe(1);
	expect(myStack.search(2)).toBe(3);
	expect(myStack.search(5)).toBe(undefined);
});
