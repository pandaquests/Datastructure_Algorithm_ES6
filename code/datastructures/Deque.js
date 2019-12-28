class Deque {
	constructor(items = []) {
		this.store = items;
	}
	size() {
		return this.store.length;
	}

	addFirst(el) {
		this.store.unshift(el);
	}
	addLast(el) {
		this.store.push(el);
	}
	removeFirst() {
		this.store.splice(0,1);
	}
	removeLast() {
		this.store.pop();
	}
	getFirst() {
		return this.store[0];
	}
	getLast() {
		return this.store[this.store.length - 1];
	}
	add(el) {
		this.store.unshift(el);
	}
	peek() {
		return this.store[0];
	}
	remove() {
		return this.store.shift();
	}
}

module.exports = Deque;
