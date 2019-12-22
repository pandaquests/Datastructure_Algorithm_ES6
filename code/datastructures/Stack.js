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
	peek() {
		if (!this.store.length) {
			return;
		}
		return this.store[this.store.length - 1];
	}
	search(el) {
		for (let i = this.store.length - 1; i >= 0; i--) {
			if (this.store[i] === el) {
				return this.store.length - i;
			}
		}
	}
}

module.exports = Stack;
