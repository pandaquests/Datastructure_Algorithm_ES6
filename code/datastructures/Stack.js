class Stack {
	constructor(items = []) {
		this.store = items;
	}
	empty() {
		return !this.store.length;
	}
	push(el) {
		this.store.push(el);
	}
	pop() {
		return this.store.pop();
	}
}

module.exports = Stack;
